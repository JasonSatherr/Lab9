

document.getElementById("log-demo").addEventListener("click", function() {
    console.log("clicked console log demo button");
  });


document.getElementById("error-demo").addEventListener("click", function() {
    console.error("MELTDOWN MODE ACTIVATED");
  });

  document.getElementById("console-dir").addEventListener("click", function() {
    console.dir(document.body);
  });

  document.getElementById("dirxml").addEventListener("click", function() {
    console.dirxml(document.body);
  });

  var group = "Group"

  document.getElementById("group-start").addEventListener("click", function() {
    console.group(group);
  });

  document.getElementById("console-table").addEventListener("click", function() {
    console.table([
        {
            trainer: 'Josh',
            pokemon: 'Ditto',
        },
        {
            trainer: 'Nick',
            pokemon: 'Charizard',
        },
        {
            trainer: 'Tu',
            pokemon: 'swablu',
        }
      ]);
  });

  document.getElementById("start-timer").addEventListener("click", function() {
    console.time();
  });
  document.getElementById("end-timer").addEventListener("click", function() {
    console.timeEnd();
  });

  document.getElementById("console-trace").addEventListener("click", function() {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
  });

  document.getElementById("global-error").addEventListener("click", function() {
    try {
        document.getElementById("starttimer").addEventListener("click", function() {
            console.time();
          });
      } catch (err) {
        console.error(err);
      }
  });



