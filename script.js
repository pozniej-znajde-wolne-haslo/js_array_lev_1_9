const lotto = [23, 54, 75];

// === ADD sth ===

lotto.push(1, 4, 13, 89, 111);

lotto.unshift(3, 5, 94, 345, 0);
console.log(lotto);

// === DELETE sth ===

lotto.pop();
lotto.pop();
console.log(lotto);


lotto.shift();
lotto.shift();
console.log(lotto);





/* UNSHIFT und SHIFT verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).

PUSH und POP verschieben das Array NICHT seitlich (weil sie am Ende Elemente hinzufügen und entfernen).

In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere Wort das Array länger.
 */