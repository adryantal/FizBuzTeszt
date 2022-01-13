const { test } = QUnit;

QUnit.module("FizBuz", function () {
  test("Fv létezik-e?", function (assert) {
    assert.ok(fizbuz, "Létezik");
  });

  test("Fv-e?", function (assert) {
    assert.ok(typeof fizbuz === "function", "Függvény");
  });

  test("0 hosszú sorozat", function (assert) {
    assert.equal(fizbuz(0), '');
  });

  //   test('1 hosszú sorozat', function(assert) {
  //     assert.equal(fizbuzErtek(1), '1');
  //   });

  //   test('2 hosszú sorozat', function(assert) {
  //     assert.equal(fizbuzErtek(2), '2');
  //   });

  //   test('4 hosszú sorozat', function(assert) {
  //     assert.equal(fizbuzErtek(4), '4');
  //   });

  test("Sem 3-mal, sem 5-tel nem oszthatók", function (assert) {
    const tomb = [1, 2, 4, 7, 8, 11, 13, 14];
    tomb.forEach(function (elem) {
      assert.equal(fizbuzErtek(elem), elem);
    });
  });

  test("3-mal oszthatók", function (assert) {
    const tomb = [3, 6, 9, 12];
    tomb.forEach(function (elem) {
      assert.equal(fizbuzErtek(elem), "fiz");
    });
  });

  test("5-el oszthatók", function (assert) {
    const tomb = [5, 10];
    tomb.forEach(function (elem) {
      assert.equal(fizbuzErtek(elem), "buz");
    });
  });

  test("15 h. sorozaat", function (assert) {
    assert.equal(fizbuzErtek(15), "fizbuz");
  });

  test("15 h. sorozaat", function (assert) {
    assert.equal(
      fizbuz(15),
      '1,2,fiz,4,buz,fiz,7,8,fiz,buz,11,fiz,13,14,fizbuz'
    );
  });

  //   test('3 hosszú sorozat', function(assert) {
  //     assert.equal(fizbuz(3), '1,2,fiz');
  //   });

  //   test('6 hosszú sorozat', function(assert) {
  //     assert.equal(fizbuz(6), '1,2,fiz,4,buz,fiz');
  //   });

  //   test('5 hosszú sorozat', function(assert) {
  //     assert.equal(fizbuz(5), '1,2,fiz,4,buz');
  //   });
});
