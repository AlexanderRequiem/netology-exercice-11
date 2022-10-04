class Rotator {
    constructor(baners) {
        this._baners = baners;
        this._timerId = null;
    }

    start() {
        if (this._timerId === null) {
            this._timerId = setTimeout(()=>this.onTimer(), 1000);
        }
    }

    stop() {
        if (this._timerId !== null) {
            clearTimeout(this._timerId );
            this._timerId = null;
        }
    }

    onTimer() {
        const current = this.getCurent();
        const next = this.getNext();

        this.hide(current);
        this.show(next)

        const delay = next.dataset.speed;
        this._timerId = setTimeout(()=>this.onTimer(), delay);
    }

    show(item) {
        item.style.color = item.dataset.color;
        if (!item.classList.contains('rotator__case_active')) {
            item.classList.add('rotator__case_active')
        }
    }

    hide(item) {
        if (item.classList.contains('rotator__case_active')) {
            item.classList.remove('rotator__case_active')
        }
    }

    getCurent() {
        return this._baners.find(item=>item.classList.contains('rotator__case_active'));
    }

    getNext() {
        if (this._baners === null || this._baners.length === 0) {
            return null;
        }

        const indexCurrent = this._baners.findIndex(item=>item.classList.contains('rotator__case_active'));
        if (indexCurrent === -1) {
            return this._baners[0];
        }
        
        const indexNext =  indexCurrent + 1;
        if (indexNext >= this._baners.length) {
            return this._baners[0];
        } else {
            return this._baners[indexNext];
        }
    }
}

const arrayBaners = Array.from(document.querySelectorAll('.rotator__case'));
const theRotator = new Rotator(arrayBaners);
theRotator.start();