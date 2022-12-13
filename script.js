let url = "https://kontests.net/api/v1/all"
cardContainer = document.getElementById('cardContainer')
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contest) => {
    console.log(contest);
    ihtml = ""
    for (item in contest) {
        console.log(contest[item]);
        ihtml += `
        <div id="cardContainer" class="card container my-2 shadow p-3 mb-5 bg-white rounded rounded-lg border border-secondary bg-light" style="width: 18rem;">
                <img src="./hackerman-1.jpg" class="card-img-top" alt="Ark">
                <div class="card-body">
                    <h5 class="card-title">${contest[item].name}</h5>
                    <p class="card-text">Status is ${contest[item].status} and site is ${contest[item].site} </p>
                    <p class="card-text"> In 24 Hours = ${contest[item].in_24_hours}</p>
                    <p class="card-text">Starts at ${contest[item].start_time}</p>
                    <p class="card-text">Ends at ${contest[item].end_time}</p>
                    <a href="${contest[item].url}" class="btn btn-primary">Go To Official Website</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml;
})

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
let jokes = [
    ` What do kids play when their mom is using the phone? Bored games.`,
    ` What do you call an ant who fights crime? A vigilANTe!`,
    ` Why are snails slow? Because they’re carrying a house on their back.`,
    ` What’s the smartest insect? A spelling bee!`,
    ` What does a storm cloud wear under his raincoat? Thunderwear.`,
    ` What is fast, loud and crunchy? A rocket chip.`,
    ` How does the ocean say hi? It waves!`,
    ` What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.`,
    ` Why did the teddy bear say no to dessert? Because she was stuffed.`,
    ` Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.`,
    ` Name the kind of tree you can hold in your hand? A palm tree!`,
    ` What do birds give out on Halloween? Tweets.`,
    ` What has ears but cannot hear? A cornfield.`,
    ` What’s a cat’s favorite dessert? A bowl full of mice-cream.`,
    ` Where did the music teacher leave her keys? In the piano!`,
    ` What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”`,
    ` What did the left eye say to the right eye? Between us, something smells!`,
    ` What do you call a guy who’s really loud? Mike.`,
    ` Why do birds fly south in the winter? It’s faster than walking!`,
    ` What did the lava say to his girlfriend? “I lava you!”`,
    ` Why did the student eat his homework? Because the teacher told him it was a piece of cake.`,
    ` What did Yoda say when he saw himself in 4k? HDMI.`,
    ` Which superhero hits home runs? Batman!`,
    ` What’s Thanos’ favorite app on his phone? Snapchat.`,
    ` Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!`,
    ` What is a room with no walls? A mushroom.`,
    ` Why did the blue jay get in trouble at school? For tweeting on a test!`,
    ` What social event do spiders love to attend? Webbings.`,
    ` What did one pickle say to the other? Dill with it.`,
    ` What is brown, hairy and wears sunglasses? A coconut on vacation.`,
    ` Why is a football stadium always cold? It has lots of fans!`,
    ` What did one math book say to the other? “I’ve got so many problems.”`,
    `  What did the Dalmatian say after lunch? That hit the spot!`,
    ` What do you call two bananas on the floor? Slippers.`,
    ` Why did the chicken cross the playground? To get to the other slide.`,
    ` Why do ducks have feathers on their tails? To cover their buttquacks.`,
    ` How does a vampire start a letter? “Tomb it may concern…”`,
    ` A plane crashed in the jungle and every single person died. Who survived? Married couples.`,
    ` What kind of math do birds love? Owl-gebra!`,
    ` Why can’t you ever tell a joke around glass? It could crack up.`,
    ` What do you call a Star Wars droid that takes the long way around? R2 detour.`,
    ` How do you stop an astronaut’s baby from crying? You rocket.`,
    ` Why did the scarecrow win a Nobel prize? Because she was outstanding in her field.`,
    ` How do you know when a bike is thinking? You can see their wheels turning.`,
    ` Why was 6 afraid of 7? Because 7,8,9.`,
    ` What goes up and down but doesn’t move? The staircase.`,
    ` What kind of shoes do frogs love? Open-toad!`,
    ` How did the baby tell his mom he had a wet diaper? He sent her a pee-mail.`,
    ` What is a witch’s favorite subject in school? Spelling.`,
    ` What’s brown and sticky? A stick.`,
    ` Why do ducks always pay with cash? Because they always have bills!`,
    ` How did Benjamin Franklin feel holding his kite when he discovered electricity? Shocked!`,
    ` When does a joke become a “dad” joke? When the punchline is a parent.`,
    ` How much did the man sell his dead batteries for? Nothing, they were free of charge!`,
    `Where do most horses live? In neighhh-borhoods!`,
    `Why did the Daddy Rabbit go to the barber? He had a lot of little hares.`,
    `How do you make a lemon drop? Let it fall from the tree.`,
    `Why can’t you ever trust atoms? Because they make up everything.`,
    `Which planet loves to sing? Nep-tune!`,
    `What’s a private investigator’s favorite shoe? Sneak-ers.`,
    `What did the limestone say to the geologist? Don’t take me for granite!`,
    `If an electric train is traveling south at 10 miles per hour and the wind is blowing North at 10 miles per hour, which way does the smoke blow? Fooled you! Electric trains don’t blow smoke.`,
    `Why are basketball courts always wet? Because the players dribble.`,
    `How do billboards talk? Sign language.`,
    `What do you call a duck that gets good grades? A wise quacker.`,
    `What do you call a fish without an eye? A fsh.`,
    `What kind of keys are sweet? Cookies!`,
    `What board game does the sky love to play? Twister.`,
    `Why does a seagull fly over the sea? Because if it flew over the bay, it would be a baygull.`,
    `What do you call a tired bull? A bulldozer.`,
    `What do you call cheese that belongs to someone else? Nacho cheese!`,
    `Why are pizza jokes the worst? They’re too cheesy.`,
    `What kind of water cannot freeze? Hot water.`,
    `Why was the belt arrested? Because it was holding up some pants.`,
    `Why did the peanut get into a rocket? He wanted to be an astro-nut!`,
    `Did you hear the joke about the roof? Never mind, it would go over your head.`,
    `Why did the cookie go to the hospital? Because it was feeling a little crummy.`,
    `What did the ghost call his Mum and Dad? His transparents.`,
    `What fruit do twins love? Pears!`,
    `What time is it when people are throwing pieces of bread at your head? Time to duck.`,
    `Why was the baby strawberry crying? Because their parents were in a jam.`,
    `Why don’t you ever see giraffes in middle school? Because they’re all in high school.`,
    `How do bees brush their hair? With honeycombs!`,
    `What do you do if someone rolls their eyes at you? Roll them right back.`,
    `What did the Baby Corn say to the Mama Corn? “Where is Pop Corn?”`,
    `What gets wetter the more it dries? A towel.`,
    `Why won’t peanut butter tell you a secret? He’s afraid you’ll spread it!`,
    ` What’s the difference between a car and a fish? You can tune a car but you can’t tuna fish.`,
    `What is worse than raining cats and dogs? Hailing taxis.`,
    ` What do you call an old snowman? A glass of water.`,
    ` Who eats snails? People who don’t like fast food!`,
    ` What did the bathtub say to the toilet? “You look flushed!”`,
    ` How much does it cost a pirate to get his ears pierced? A buck an ear.`,
    ` What was a more useful invention than the first telephone? The second telephone.`,
    ` Why did the banana visit the doctor? She wasn’t peeling well!`,
    ` What’s a snake’s favorite subject in school? Hiss-tory.`,
    ` How do you talk to a giant? Use big words.`,
    ` What did the bald man say when he received a comb for his birthday? “I’ll never part with this!”`,
    ` Why did the computer get sick? It caught a virus!`,
    ` Why did the God of Thunder need to stretch his leg muscles so much as a kid? He was a little Thor.`,
    ` What animal is always at a baseball game? A bat.`,
    ` How can you tell if an ant is a boy or a girl? They’re all girls! If they were boys, they’d be uncles.`,
    ` Why did the teacher have a sack full of birdseed? For her parrot-teacher conferences.`,
    ` What kind of music do mummies listen to? Wrap music.`,
    ` What falls in winter but never gets hurt? Snow.`,
    ` How many months have 28 days? All of them!`,
    ` Why was the broom late to school? It over-swept!`,
    ` What kind of nut doesn’t like money? Cash ew.`,
    ` What do you call a ghost’s true love? A ghoul-friend.`,
    ` What’s white and can’t climb trees? A fridge.`,
    ` What is the strongest animal in the sea? Mussels.`,
    ` Why didn’t the lamp sink? It was too light.`,
    ` What building in New York has the most stories? The public library.`,
    ` What has three letters and starts with gas? A car.`,
    ` How does the moon cut his hair? Eclipse it.`,
    ` What did the elf learn in school? The elf-abet.`,
    ` What kind of chicken is the funniest? A comedi-hen!`,
    ` Why do vampires seem sick? They’re always coffin.`,
    ` How do you get a squirrel to like you? Act like a complete nut!`,
    ` Why did the farmer ride his horse into town? Because it was too heavy to carry.`,
    ` What’s a cat’s favorite color? Purr-ple.`,
    ` Where do cows go on December 31st? A moo year’s eve party.`,
    ` What do you call two birds in love? Tweethearts.`,
    ` Why are ghosts terrible liars? Because you can see right through them.`,
    ` What does a triceratops sit on? On its tricera-bottom.`,
    ` What did the snowman ask the other snowman? “Do you smell carrots?”`,
    ` How does a scientist freshen her breath? With experi-mints.`,
    ` Why are elevator jokes the funniest? Because they work on so many levels.`,
    ` What do you call a sleeping T-Rex? A dino-snore!`,
    ` What did the fisherman say to the magician? “Pick a cod, any cod.”`,
    ` How are false teeth like stars? They come out at night.`,
    ` Why was the student’s report card wet? It was below C level.`,
    ` What kind of pizza do dogs eat? Pup-eroni pizza!`,
    ` What do Olympic sprinters eat before a race? Nothing, they fast!`,
    ` What’s worse than finding a worm in your apple? Finding half a worm.`,
    ` Which side of a cow is the hairiest? The outside!`,
    ` What do cats wear to bed? Paw-jamas!`,
    ` Why do bowling pins have such a hard life? They’re always getting knocked down.`,
    ` What is a computer's favorite snack? Computer chips.`,
    ` Why did the M&M go to school? Because she wanted to be a Smartie.`,
    ` What kind of pictures do turtles take? Shell-fies.`,
    ` Why did the golfer wear two pairs of pants while he played? In case he got a hole in one.`,
    ` What was the first animal in space? The cow that jumped over the moon.`,
    ` What do you call a famous turtle? A shell-ebrity!`,
    ` Why are penguins socially awkward? Because they don’t know how to break the ice.`,
    ` What did the banana say to the dog? Nothing. Bananas can’t talk.`,
    ` What type of key opens a banana? A mon-key.`,
    ` What do you feed an alligator? Anything it wants!`,
    ` How does a cucumber become a pickle? It goes through a jarring experience.`,
    ` What time is it when the clock strikes 13? Time to get a new clock.`,
    ` Why did the melon jump into the river? Because it wanted to be a watermelon.`,
    ` What makes a sick lemon feel better? Lemon-aid.`,
    ` Where do you learn to make ice cream? Sundae school.`,
    ` Why can’t you trust zookeepers? They love cheetahs.`,
    ` How does Spiderman do research? On the World Wide Web!`,
    ` Why did the tomato blush? Because it saw the salad dressing.`,
    ` What do you think of that new diner on the moon? Food was good, but there really wasn’t much atmosphere.`,
    ` What do Alexander the Great and Kermit the Frog have in common? The same middle name.`,
    ` What’s the largest gem on earth? A baseball diamond!`,
    ` What animal dresses up and howls? A wearwolf.`,
    ` Why did the dinosaur cross the road? Because the chicken wasn’t born yet.`,
    ` What do you get if you dip a baby cat in chocolate? A Kitty-Kat Bar!`,
    ` What's red and bad for your teeth? A brick.`,
    ` Why can’t Elsa have a balloon? Because she’ll let it go.`,
    ` Why did the farmer jump on his potato plants? Because he wanted mashed potatoes.`,
    ` What food is never on time? Choco-late!`,
    ` What did the mama elephant say to her kids when they weren’t behaving? “Tusk, tusk.”`,
    ` How do you make an octopus laugh? With ten-tickles.`,
    ` What did the fish say when he bumped into a concrete wall? “Dam!”`,
    ` What cookie flavor do monkeys love? Chocolate Chimp!`,
    ` What are bald sea captains most worried about? Cap-sies.`,
    ` How do you make a tissue dance? You put a little boogie in it.`,
    ` Why did the puppy do so well at school? Because she was the teacher’s pet!`,
    ` Why do hurricanes wear a monocle to see? Because they have one eye.`,
    ` What do you call a retired vegetable? A has-bean.`,
    ` What did the nose say to the finger? Quick picking on me!`,
    ` What do you call a piece of seaweed that’s fallen in the trash? Yaki Nori.`,
    ` What did the clock ask the watch? Hour you doing?`,
    ` Where do hamburgers and hot dogs go dancing? A meatball.`,
    ` What musical instrument is found in the bathroom? A tuba toothpaste.`,
    ` What’s the most famous fish? A starfish!`,
    ` What do you call a sheep with no legs? A cloud.`,
    ` Why don’t oysters share? They’re shell-fish!`,
    ` What’s blue and smells like red paint? Blue paint.`,
    ` Where do vampires keep their money? A blood bank.`,
    ` How do porcupines kiss? Carefully!`,
    ` Why are fish so intelligent? Because they live in schools!`,
    ` What kind of music do bubbles hate? Pop.`,
    ` What do you call a dog magician? A labracadabrador.`,
    ` What did the triangle say to the circle? You’re pointless!`,
    ` What kind of fish loves going to war? A swordfish.`,
    ` Why can’t your hand be 12 inches long? Because then it’d be a foot.`,
    ` Why couldn't the pony sing a lullaby? She was a little horse.`,
    ` What’s a parent’s favorite Christmas carol? Silent Night.`,
    ` Where do woodland birds invest their money? The stork-market.`,
    ` What do you call a bear with no teeth? A gummy bear.`,
    ` What do you call a fake noodle? An impasta.`,
    ` Can February March? No, but April May!`,
];

let getjoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
};
// console.log(getjoke());
function Jokesbyid() {
    document.getElementById("demo").innerHTML = getjoke();
}