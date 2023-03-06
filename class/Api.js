class Api {
    #url;
    constructor() {
        this.#url = "https://slifer.bsite.net";
    }
    getUrl() {
        return this.#url;
    }
}

export class Sucursal extends Api {
    #urlApi;
    constructor() {
        super()
        this.#urlApi = `${this.getUrl()}/td-sucursal`
    }

    async getSucursal() {
        const res = await fetch(this.#urlApi);
        const data = await res.json();
        return data;
    }
}

export class Categoria extends Api {
    #urlApi;
    constructor() {
        super()
        this.#urlApi = `${this.getUrl()}/td-categoria`
    }

    async getCategoria() {
        const res = await fetch(this.#urlApi);
        const data = await res.json();
        return data;
    }
}

export class Producto extends Api {
    #urlApi;
    constructor() {
        super()
        this.#urlApi = `${this.getUrl()}/td-producto`
    }

    async getProducto() {
        const res = await fetch(this.#urlApi);
        const data = await res.json();
        return data;
    }
}