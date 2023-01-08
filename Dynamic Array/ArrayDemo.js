const _items = new WeakMap();

export class ArrayDemo{
    constructor() {
        _items.set(this, []);
    }

    // append
    add(item) {
        _items.get(this).push(item);
    }

    // remove from end
    remove() {
        _items.get(this).pop();
    }

    indsertAt(index, item) {
        _items.get(this).splice(index, 0, item);
    }

    removeAt(index) {
        _items.get(this).splice(index, 1);
    }

    replace(index, item) {
        _items.get(this).splice(index, 1, item);
    }

    clear() {
        _items.get(this).length = 0;
    }

    getArray() {
        return _items.get(this);
    }

    get length() {
        return _items.get(this).length;
    }
}