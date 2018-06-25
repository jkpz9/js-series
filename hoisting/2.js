(function(){
    console.log(foo()); // 3
    var foo = function() {
        return 1;
    };

    function foo() {
        return 2;
    };
    function foo() {
        return 3;
    };
})();