var Pet = {
    DOG: 0,
    CAT: 1,
    FISH: 2
}

function get_result() {
    var q1 = document.getElementById("quiz").question1.value;
    var q2 = document.getElementById("quiz").question2.value;
    var q3 = document.getElementById("quiz").question3.value;
    var q4 = document.getElementById("quiz").question4.value;
    var dog = 0, cat = 0, fish = 0;

    if (q1 == "Yes" || q1 == "Y/N") {
        dog++;
        cat++;
    } else
        fish++;

    if (q2 == "1h")
        cat++;
    else if (q2 == "2h")
        dog++;
    else if (q2 == "Mh")
        fish++;

    if (q3 == "20")
        cat++;
    else if (q3 == "30")
        dog++;
    else if (q3 == "Ms")
        fish++;

    if (q4 == "Yes" || q4 == "Y/N") {
        dog++;
        cat++;
        fish++;
    }
    const largest = Math.max(dog, cat, fish);
    if (largest == dog)
        return (Pet.DOG);
    else if (largest == cat)
        return (Pet.CAT);
    else if (largest == fish)
        return (Pet.FISH);
}

function changepage() {
    const result = get_result();
    const res_to_page = {0 : "dog.html", 1: "cat.html", 2: "fish.html"};

    window.location.replace(res_to_page[result]);
}