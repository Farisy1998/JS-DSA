const _items = new WeakMap();

export class ArrayDemo{
    constructor(capacity = 4) {
        _items.set(this, []);
        this.capacity = capacity;
    }

    get length() {
        return _items.get(this).length;
    }

    // append
    add(item) {
        const items = _items.get(this);

        if (items.length === this.capacity) throw new Error("Array is full");
        items.push(item);
    }

    // remove from end
    remove() {
        const items = _items.get(this);

        if (items.length === 0) throw new Error("Array is empty");
        return items.pop();
    }

    insertAt(index, item) {
        const items = _items.get(this);

        if (items.length === this.capacity) throw new Error("Array is full");
        items.splice(index, 0, item);
    }

    replace(index, item) {
        const items = _items.get(this);

        if (index < 0 || index > items.length-1) throw new Error('Array index out of bound');
        items.splice(index, 1, item);
        return item;
    }

    removeAt(index) {
        const items = _items.get(this);

        if (index < 0 || index > items.length - 1) throw new Error("Array index out of bound");
        items.splice(index, 1);
    }

    include(item) {
        return _items.get(this).includes(item);
    }

    clear() {
        _items.get(this).length = 0;
    }

    getArray() {
        return _items.get(this);
    }
}