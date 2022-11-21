class InputCompunent {
    #block = null;

    #input = null;
    #label = null;

    #msgError = 'Some error';

    #regex = null;
    constructor(type) {
        this.#init(type)
    }

    #init(type = 'text') {
        this.#block = document.createElement('div');
        this.#block.classList.add('input');
        const row = document.createElement('div');
        this.#label = document.createElement('label');
        this.#msgError = document.createElement('p');
        
        this.#input = document.createElement('input');
        this.#input.setAttribute('type', type);

        row.append(this.#label, this.#msgError);
        this.#block.append(row, this.#input);

        // this.#input.addEventListener('input', this.onInput.bind(this))
    }

    // onInput() {
    //     console.log(this.#regex);
    //     if (!this.#regex) {
    //         return this.#msgError.style.display = 'none'; 
    //     }
    //     console.log(this.#regex.test(this.#input.value));
    //     this.#msgError.style.display = this.#regex.test(this.#input.value);
    // }

    set placeholder(placeholder = '') {
        this.#input.setAttribute('placeholder', placeholder);
    }

    set error(error = '') {
        this.#msgError.innerText = error;
    }

    set isError(isError = false) {
        this.#msgError.style.display = !!isError;
    }

    get isError() {
        return this.#msgError.style.display;
    }

    get value() {
        return this.#input.value.trim();
    }

    get input() {
        return this.#input;
    }

    set regex(reg) {
        this.#regex = reg ? new RegExp(reg) : null;
    }

    get isValid() {
        return this.#regex 
            ? this.#regex.test(this.#input.value)
            : true;
    }

    set onInput(callback) {
        this.#input.addEventListener('input', callback);
    }
}