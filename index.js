let rawQuotations = (
`1. "Only root karate come from Miyagi. Just like bonsai choose own way grow because root strong you choose own way do karate same reason."

-'The Karate Kid.'

#2"If karate used defend honor, defend life, karate mean something. If karate used defend plastic metal trophy, karate no mean nothing."

-'The Karate Kid Part III.'

#3. "Better learn balance....Balance is key...Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?"

-'The Karate Kid.'

#4. "Walk left side, safe. Walk right side, safe. Walk in the middle, sooner or later you get squish just like grape."

-'The Karate Kid.'

#5. "Man who catch fly with chopstick....accomplish anything."

-'The Karate Kid Part II.'

#6. "Small price to pay for your honor!!"

-'The Karate Kid Part II.'

#7. "No such thing as bad student, only bad teacher."

-'The Karate Kid.'

#8. "Oi, you stay focused, Daniel San, your best Karate still inside of you! Now time let out!"

-'The Karate Kid Part III.'

#9. "Here are the 2 Rules of Miyagi-Ryu Karate. Rule Number 1: 'Karate for defense only.' Rule Number 2: 'First learn rule number 1."

-'The Karate Kid.'

#10. "This not tournament. This for real."

-'The Karate Kid Part III.'

#11. "License never replace eye, ear and brain."

-'The Karate Kid.'

#12. "Learn balance Daniel san... Wax-on... Wax-off."

-'The Karate Kid.'

#13. "Trust the quality of what you know, not quantity."

-'The Karate Kid.'

#14. "We make sacred pact. I promise teach karate to you, you promise learn. I say, you do, no questions.'

-'The Karate Kid.'

#15. "Lesson not just karate only. Lesson for whole life. Whole life have a balance. Everything be better."

-'The Karate Kid.'

#16. "Never trust spiritual leader who cannot dance."

-'The Karate Kid Part III.'

#17. "Daniel-San, lie become truth only if person wanna believe it."

-'The Karate Kid.'

#18. "Miyagi: Oh, Daniel-san, you too much by self, not good.

Daniel Larusso: I'm not by myself, I'm with you.

Miyagi: To make honey, young bee need young flower…not old prune."

-'The Karate Kid.'

#19. "Never put passion in front of principle, even if you win, you'll lose."

-'The Karate Kid Part II.'

#20. "Daniel Larusso: You could have killed him, couldn't you?

Mr. Miyagi: Hai.

Daniel Larusso: Well, why didn't you?

Mr. Miyagi: Because Daniel, for man with no forgiveness in heart, life worse punishment than death."

-'The Karate Kid Part II.'

#21. "Sometimes What Heart Know, Head Forget."

-'The Karate Kid Part II.'

#22. "First learn stand, then learn fly. Nature rule, Daniel-san."

-'The Karate Kid.'`
)

let arrayOfQuotations = rawQuotations.split("#")

let p = document.querySelector('p');

function getRandom() {
    return Math.ceil(Math.random()* arrayOfQuotations.length-1);
  }

  console.log(getRandom());

  quotation.addEventListener('click', ()=> { 
    p.innerText = arrayOfQuotations[getRandom()];
  });
  