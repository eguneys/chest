import * as treePath from './path';
import * as ops from './ops';
export default class TreeWrapper {
    constructor(root) {
        this.root = root;
    }
    getNodeList(path) {
        return ops.collect(this.root, function (node) {
            const id = treePath.head(path);
            if (id === '')
                return;
            path = treePath.tail(path);
            return ops.childById(node, id);
        });
    }
}
TreeWrapper.make = (root) => new TreeWrapper(root);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxRQUFRLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDO0FBRTdCLE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBVztJQU05QixZQUFZLElBQWU7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFlO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVMsSUFBZTtZQUNwRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQUUsT0FBTztZQUN0QixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFmTSxnQkFBSSxHQUFHLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRyZWVQYXRoIGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgKiBhcyBvcHMgZnJvbSAnLi9vcHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlV3JhcHBlciB7XG5cbiAgc3RhdGljIG1ha2UgPSAocm9vdDogVHJlZS5Ob2RlKSA9PiBuZXcgVHJlZVdyYXBwZXIocm9vdCk7XG4gIFxuICByb290OiBUcmVlLk5vZGU7XG5cbiAgY29uc3RydWN0b3Iocm9vdDogVHJlZS5Ob2RlKSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgfVxuICBcbiAgZ2V0Tm9kZUxpc3QocGF0aDogVHJlZS5QYXRoKTogVHJlZS5Ob2RlW10ge1xuICAgIHJldHVybiBvcHMuY29sbGVjdCh0aGlzLnJvb3QsIGZ1bmN0aW9uKG5vZGU6IFRyZWUuTm9kZSkge1xuICAgICAgY29uc3QgaWQgPSB0cmVlUGF0aC5oZWFkKHBhdGgpO1xuICAgICAgaWYgKGlkID09PSAnJykgcmV0dXJuO1xuICAgICAgcGF0aCA9IHRyZWVQYXRoLnRhaWwocGF0aCk7XG4gICAgICByZXR1cm4gb3BzLmNoaWxkQnlJZChub2RlLCBpZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==