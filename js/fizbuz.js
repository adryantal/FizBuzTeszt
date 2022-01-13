fizbuz(15);
console.log('Vmi');
function fizbuz(n) {
  let tomb = [];
  //   if (n == 1) {
  //     eredmeny = '1';
  //   }
  //   if (n == 2) {
  //     eredmeny = '1,2';
  //   }

  for (let index = 1; index <= n; index++) {
    tomb.push(fizbuzErtek(index));
   
   

    // if (index < n) {
    //   eredmeny += ",";
    // }
  }

  console.log(tomb.join(","));

  return tomb.join(",");
}

function fizbuzErtek(n) {
  let eredmeny = "";
  if (n % 15 == 0) {
    eredmeny += "fizbuz";
  } else if (n % 5 == 0) {
    eredmeny += "buz";
  } else if (n % 3 == 0) {
    eredmeny += "fiz";
  } else {
    eredmeny += n;
  }
  return eredmeny;
}
