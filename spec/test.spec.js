//import addItem from "../src/main/index.html"
//const addItem = require("../src/main/index.html")
//const addItem = require("fix-esm").require("addItem");

//suite de teste
describe("get element of the list", () => { 

    it("should be a string", () => {
        const result = "leite";
        expect(result).toBe("leite");
    })
})

describe("remove element from the list", () => { 

    it("should be a string", () => {
        const result = removeItem();
        expect(result).toBe(""); //item removido
    })
})

describe("repeated item", () => { 

    it("should not repeat", () => {
        const result = addItem().$scope.errortext;
        expect(result).toBe("O item já está na sua lista.");
    })
})

/*
DESCRIBE = Suite (grupo de teste relacionados)
IT = Spec (teste)

Funcoes a serem testadas:
$scope.addItem = function ()  => testar se adicionou o item
$scope.removeItem = function (x) => testar se repetiu (não adicionou)
*/
