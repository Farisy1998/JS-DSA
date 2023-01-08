const _items = new WeakMap();
const _front = {};
const _rear = {};

export class QueueDemo{
    constructor() {
        _items.set(this, []);
        _front.this = -1;
        _rear.this = -1;
    }

    enqueue(item) {
        if (this.isEmpty()) {
            _items.get(this).push(item);
            _front.this++;
            _rear.this++;
        }
        else {
            _items.get(this).push(item);
            _rear.this++;
        }
    }

    dequeue() {
        if (this.isEmpty())
            throw new Error('Queue is empty');
        if (_rear.this === 0) {
            _items.get(this).shift();
            _front.this--;
            _rear.this--;
        }
        else {
            _items.get(this).shift();
            _rear.this--;
        }
    }

    peek() {
        if (this.isEmpty())
            throw new Error("Queue is empty");
        
        const items = _items.get(this);
        return items[_front.this];
    }

    getQueue() {
        return _items.get(this);
    }

    isEmpty() {
        return _items.get(this).length === 0 ? true : false;
    }

    get length() {
        return _items.get(this).length;
    }
}