describe("Сложение", function() {
    it("должен возвращать 5 при сложении 2 и 3", function() {
        assert.equal(add(2, 3), 5);
    });

    it("не должен возвращать 1 при сложении -2 и 2", function() {
        assert.notEqual(add(-2, 1), -1);
    });

});

describe("Вычитание", function() {
    it("должен возвращать 1 при вычитании 2 из 3", function() {
        assert.equal(subtract(3, 2), 1);
    });

    it("должен возвращать -4 при вычитании -2 из 4", function() {
        assert.equal(subtract(-2, 4), -4);
    });

});

describe("Умножение", function() {
    it("должен возвращать 64 при умножении 8 на 8", function() {
        assert.equal(multiply(8, 8), 64);
    });

    it("должен возвращать -100 при умножении -5 на 25", function() {
        assert.equal(multiply(-5, 25), -100);
    });

});

describe("Деление", function() {
    it("должен возвращать 1 при делении 1024 на 1024", function() {
        assert.equal(divide(1024, 1024), 1);
    });

    it("должен возвращать 0 при делении 1 на 42", function() {
        assert.equal(divide(1, 42), 0);
    });

});

describe("Возведение в степень", function() {
    it("должен возвращать 3125 при возведение 5 в степень 5", function() {
        assert.equal(power(5, 5), 3125);
    });

    it("должен возвращать 64 при возведение 2 в степень 7", function() {
        assert.equal(power(2, 7), 64);
    });

});

describe("Факториал первого числа", function() {
    it("должен возвращать 120 при факториале 5", function() {
        assert.equal(factorial(5), 120);
    });

    it("должен возвращать 2 при факториале 1", function() {
        assert.equal(factorial(1), 2);
    });

});
