import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import { kbt } from 'koob';
import * as chest from '../../modules';
import { e } from '../../modules/common';
import { Context } from '../../modules/api';

export default class BookCtrl extends ChestCtrl {

  constructor(env: Env) {
    super(env);
  }
  
  async book(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);
    let { bookId } = req.params;
    
    this.opFuResult(this.env.book.pager.book(bookId), res);
  }
  
  async all(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);
    this.opFuResult(this.env.book.pager.all(), res);
  }

  async add(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    e.fold(chest.book.form.book(req.body),
           _ => this.open(this.env.book.api.create(_).then(() => _), res),
           err => res.status(400).send({err}))
  }


  async chapter(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);
    let { chapterId } = req.params;
    
    this.opFuResult(this.env.book.pager.chapter(chapterId), res);
  }
  
  
  async chapters(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    let { bookId } = req.params;
    
    this.open(this.env.book.pager.chapters(bookId), res);
  }

  
  async addChapter(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    e.fold(chest.book.form.chapter(req.body),
           _ => this.open(this.env.book.api.createChapter(_).then(() => _), res),
           err => res.status(400).send({err}))
  }

  async sections(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    let { chapterId } = req.params;
    
    this.open(this.env.book.pager.sections(chapterId), res);
  }

  async addSection(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    e.fold(chest.book.form.section(req.body),
           _ => this.open(this.env.book.api.createSection(_).then(() => _), res),
           err => res.status(400).send({err}))
  }

  async contents(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    let { sourceId } = req.params;
    
    this.open(this.env.book.pager.contents(sourceId), res);
  }

  async addContent(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);
    e.fold(chest.book.form.content(req.body),
           _ => this.open(this.env.book.api.createContent(_).then(() => _), res),
           err => res.status(400).send({err}))
  }

  async updateContent(req: any, res: any, next: any) {
    let ctx: Context = await this.reqToCtx(req);

    let { sessionId } = req.session;
    if (!sessionId) {
      res.send({redirect:'/auth'});
      return;
    }

    let { contentId } = req.params;

    e.fold(chest.book.form.updateContent(req.body),
           _ => this.env.book.api.updateContentOrDefault(contentId, _, sessionId)
             .then(() => res.send(_))
             .catch(err => res.send({err})),
           err => res.send({err}))
  }



}
