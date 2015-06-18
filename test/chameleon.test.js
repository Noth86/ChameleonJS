describe("Chameleon Test Suite", function() {

    beforeEach(function() {
        spyOn(XMLHttpRequest.prototype, 'open');
        spyOn(XMLHttpRequest.prototype, 'setRequestHeader');
        spyOn(XMLHttpRequest.prototype, 'send');
    });

    it("window.onerror must be called", function() {
        window.onerror('messaggio', 'file', 'line', 'column', 'error');
        data = 'browser=Safari/534.34&message=messaggio&file=file&line=line&column=column&error=error';

        expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
        expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalled();
        expect(XMLHttpRequest.prototype.send).toHaveBeenCalledWith(data);
    });
});
