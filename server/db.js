const typeorm = require('typeorm');

class Creator {
    constructor(id,name,img,ytURL) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.ytURL = ytURL;

    }
}

const EntitySchema = require("typeorm").EntitySchema;

const CreatorSchema = new EntitySchema({
    name: "Creator",
    target: Creator,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        img: {
            type: "text"
        },
        ytURL: {
            type: "text"
        }
    }
})