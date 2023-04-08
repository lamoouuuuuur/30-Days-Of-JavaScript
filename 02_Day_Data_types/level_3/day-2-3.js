console.log("#1");
let str_1 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let pattern_1 = str_1.match(/([Ll]ove)/g);
console.log(pattern_1.length);

console.log("#2");
let str_2 = "You cannot end a sentence with because because because is a conjunction";
let pattern_2 = str_2.match(/(because)/g);
console.log(pattern_2.length);

console.log("#3");
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = sentence.replace(/[%$@&#;]+/g, "");
let word = cleanSentence.match(/\w+/g)
    .reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        if (!(acc[word] < acc[acc.$])) acc.$ = word;
        return acc;
    }, {}).$;
console.log(cleanSentence);
console.log(word);

console.log("#4");
let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let pattern_4 = text.match(/\d+/g).map((elem) => +elem).reduce((acc, elem) => acc + elem);
console.log(pattern_4);