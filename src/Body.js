import React, { useState } from "react";
import "./Body.sass";

//const de las cartas 
const Carta_des_0 ={
  name: '-',
  url: 'https://duelingnexus.com/assets/images/cover.png',
  descripcion: ""
}

const Carta_des_1 ={
  name: 'Galaxy-Eyes Photon Dragon',
  type: "[Monster|Effect] Dragon/Light",
  att: "[★8] 3000/2500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/93717133.jpg',
  descripcion: "You can Special Summon this card (from your hand) by Tributing 2 monsters with 2000 or more ATK. During the Battle Step, if this card battles an opponent's monster (Quick Effect): You can target that opponent's monster; banish both this card from the field and that target. Return those banished monsters to the field at the end of the Battle Phase, and if you banished an Xyz Monster, this card gains 500 ATK for each material it had when it was banished."
}

const Carta_des_2 ={
  name: 'Galaxy-Eyes Afterglow Dragon',
  type: "[Monster|Effect] Dragon/Light",
  att: "[★8] 3000/2500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/62968263.jpg',
  descripcion: "If you control a 'Galaxy-Eyes' monster: You can Special Summon this card from your hand in Defense Position. If this card is detached from an Xyz Monster to activate that monster's effect: You can take 1 'Galaxy-Eyes Photon Dragon' from your hand or Deck, and either Special Summon it, or attach it to an Xyz Monster you control as material, then if you activated this effect during the Battle Phase, double the ATK of all 'Number' Xyz Monsters you control. You can only use each effect of 'Galaxy-Eyes Afterglow Dragon' once per turn."
}

const Carta_des_3 ={
  name: 'Galaxy Soldier',
  type: "[Monster|Effect] Machine/Light",
  att: "[★5] 2000/0",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/46659709.jpg',
  descripcion: "You can send 1 other LIGHT monster from your hand to the GY; Special Summon this card from your hand in Defense Position. When this card is Special Summoned: You can add 1 'Galaxy' monster from your Deck to your hand. You can only use this effect of 'Galaxy Soldier' once per turn."
}

const Carta_des_4 ={
  name: 'Galaxy Brave',
  type: "[Monster|Effect] Warrior/Light",
  att: "[★8] 0/0",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/55168550.jpg',
  descripcion: "If this card is in your hand: You can reveal 1 'Photon' monster in your hand; Special Summon this card, and if you do, its Level becomes the Level of that 'Photon' monster. If this card is Normal or Special Summoned: You can target 1 'Galaxy' monster in your GY; this card's ATK/DEF become that monster's ATK/DEF. You can only use each effect of 'Galaxy Brave' once per turn."
}

const Carta_des_5 ={
  name: 'Galaxy Knight',
  type: "[Monster|Effect] Warrior/Light",
  att: "[★8] 2800/2600",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/35950025.jpg',
  descripcion: "If you control a 'Photon' or 'Galaxy' monster, you can Normal Summon this card without Tributing. If Summoned this way: Target 1 'Galaxy-Eyes Photon Dragon' in your GY (if possible); regardless, this card loses 1000 ATK, and if it does, Special Summon that target (if any) in Defense Position. This ATK decrease lasts until the end of this turn."
}

const Carta_des_6 ={
  name: 'Galaxy Wizard',
  type: "[Monster|Effect] Spellcaster/Light",
  att: "[★4] 0/1800",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/98555327.jpg',
  descripcion: "Once per turn: You can increase this card's Level by 4 until the end of this turn. You can Tribute this card; add 1 'Galaxy' card from your Deck to your hand, except 'Galaxy Wizard'."
}

const Carta_des_7 ={
  name: 'Photon Orbital',
  type: "[Monster|Effect] Machine/Light",
  att: "[★4] 500/2000",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/89132148.jpg',
  descripcion: 'During your Main Phase: You can target 1 "Photon" or "Galaxy" monster you control; equip this monster from your hand or field to that target. It gains 500 ATK, also it cannot be destroyed by battle. You can send this Equip Card to the GY; add 1 "Photon" or "Galaxy" monster from your Deck to your hand, except "Photon Orbital". You can only use this effect of "Photon Orbital" once per turn.'
}

const Carta_des_8 ={
  name: 'Photon Vanisher',
  type: "[Monster|Effect|SpSummon] Warrior/Light",
  att: "[★4] 2000/0",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/43147039.jpg',
  descripcion: 'Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) while you control a "Photon" or "Galaxy" monster. Cannot attack the turn it is Special Summoned. You can only Special Summon "Photon Vanisher(s)" once per turn. If this card is Special Summoned: You can add 1 "Galaxy-Eyes Photon Dragon" from your Deck to your hand. An Xyz Monster that was Summoned using this card on the field as material gains this effect.',
  extra: '● Banish any monster destroyed by battle with this card.'
}

const Carta_des_9 ={
  name: 'Nebula Dragon',
  type: "[Monster|Effect] Dragon/Lightt",
  att: "[★8] 2000/0",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/51786039.jpg',
  descripcion: 'You can reveal this card and 1 other Level 8 Dragon monster in your hand; Special Summon both in Defense Position, but negate their effects, also you cannot Normal or Special Summon monsters for the rest of this turn, except LIGHT or DARK Dragon monsters. You can banish this card from your GY, then target 1 Level 4 LIGHT or DARK Dragon monster in your GY; add it to your hand. You can only use each effect of "Nebula Dragon" once per turn.',
  extra: ''
}

const Carta_des_10 ={
  name: 'Astral Kuriboh',
  type: "[Monster|Effect] Fiend/Light",
  att: "[★1] 100/100",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/64591429.jpg',
  descripcion: 'You can reveal 1 "Number" Xyz Monster in your Extra Deck; Special Summon this card from your hand. If you do, this cards Level becomes the revealed monsters Rank, also while it is face-up in the Monster Zone, you cannot Special Summon monsters from the Extra Deck, except "Number" Xyz Monsters. You can only use this effect of "Astral Kuriboh" once per turn. A "Number" Xyz Monster that was Summoned using this card on the field as material gains this effect.',
  extra: '● Cannot be destroyed by battle or your opponents card effects.'
}

const Carta_des_11 ={
  name: 'Maxx "C"',
  type: "[Monster|Effect] Insect/Earth",
  att: "[★2] 500/200",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/23434538.jpg',
  descripcion: 'During either players turn: You can send this card from your hand to the Graveyard; this turn, each time your opponent Special Summons a monster(s), immediately draw 1 card. You can only use 1 "Maxx "C"" per turn.',
  extra: ''
}

const Carta_des_12 ={
  name: 'Ash Blossom & Joyous Spring',
  type: "[Monster|Effect|Tuner] Zombie/Fire",
  att: "[★3] 0/1800",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/14558127.jpg',
  descripcion: 'When a card or effect is activated that includes any of these effects (Quick Effect): You can discard this card; negate that effect.',
  extra: '● Add a card from the Deck to the hand.',
  extra1: '● Special Summon from the Deck.',
  extra2: '● Send a card from the Deck to the GY.',
  extra3: 'You can only use this effect of "Ash Blossom & Joyous Spring" once per turn.'
}

const Carta_des_13 ={
  name: 'Effect Veiler',
  type: "[Monster|Effect|Tuner] Spellcaster/Light",
  att: "[★1] 0/0",
  url: 'https://rawcdn.githack.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/97268402.jpg',
  descripcion: 'During your opponents Main Phase (Quick Effect): You can send this card from your hand to the GY, then target 1 Effect Monster your opponent controls; negate the effects of that face-up monster your opponent controls, until the end of this turn.',
  extra: ''
}

const Carta_des_14 ={
  name: 'Photon Sanctuary',
  type: "[Spell]",
  att: "",
  url: 'https://rawcdn.githack.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/17418744.jpg',
  descripcion: 'Special Summon 2 "Photon Tokens" (Thunder-Type/LIGHT/Level 4/ATK 2000/DEF 0) in Defense Position. These Tokens cannot attack or be used as Synchro Material Monsters. You cannot Summon other monsters the turn you activate this card, except for LIGHT monsters.',
  extra: ''
}

const Carta_des_15 ={
  name: 'Galaxy Expedition',
  type: "[Spell]",
  att: "",
  url: 'https://rawcdn.githack.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/60222582.jpg',
  descripcion: 'If you control a Level 5 or higher "Photon" or "Galaxy" monster: Special Summon 1 Level 5 or higher "Photon" or "Galaxy" monster from your Deck in Defense Position. You can only activate 1 "Galaxy Expedition" per turn.',
  extra: ''
}

const Carta_des_16 ={
  name: 'Galaxy Trance',
  type: "[Spell]",
  att: "",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/63956833.jpg',
  descripcion: 'Pay 2000 LP, then target 1 "Photon" monster in your GY; Special Summon both it and 1 "Galaxy" monster from your Deck, with the same Level, both in Defense Position, and if you do, each monsters ATK become 2000, also their effects are negated. You can only activate 1 "Galaxy Trance" per turn. You cannot Normal or Special Summon monsters during the turn you activate this card, except "Photon" and "Galaxy" monsters.',
  extra: ''
}

const Carta_des_17 ={
  name: 'Crossout Designator',
  type: "[Spell|Quick-Play]",
  att: "",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/65681983.jpg',
  descripcion: 'Declare 1 card name; banish 1 of that declared card from your Main Deck, and if you do, negate its effects, as well as the activated effects and effects on the field of cards with the same original name, until the end of this turn. You can only activate 1 "Crossout Designator" per turn.',
  extra: ''
}

const Carta_des_18 ={
  name: 'Small World',
  type: "[Spell]",
  att: "",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/89558743.jpg',
  descripcion: 'Reveal 1 monster in your hand, choose 1 monster from your Deck that has exactly 1 of the same Type, Attribute, Level, ATK or DEF, and banish the revealed monster from your hand face-down. Then add, from the Deck to your hand, 1 monster that has exactly 1 of the same Type, Attribute, Level, ATK or DEF as the monster chosen from your Deck, and banish the card chosen from the Deck face-down. You can only activate 1 "Small World" per turn.',
  extra: ''
}

const Carta_des_19 ={
  name: 'Called by the Grave',
  type: "[Spell|Quick-Play]",
  att: "",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/24224830.jpg',
  descripcion: 'Target 1 monster in your opponents GY; banish it, and if you do, until the end of the next turn, its effects are negated, as well as the activated effects and effects on the field of monsters with the same original name.',
  extra: ''
}

const Carta_des_20 ={
  name: 'Galaxy Zero',
  type: "[Spell|Equip]",
  att: "",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/97617181.jpg',
  descripcion: 'Target 1 "Photon" or "Galaxy" monster in your GY; Special Summon it in Attack Position and equip it with this card. It cannot attack or activate its effects. If it would be destroyed by battle or card effect during the Battle Phase, you can destroy this card instead. If this face-up card leaves the field: The equipped monsters ATK becomes 0. You can only activate 1 "Galaxy Zero" per turn.',
  extra: ''
}

const Carta_des_21 ={
  name: 'Number 90: Galaxy-Eyes Photon Lord',
  type: "[Monster|Effect|Xyz] Warrior/Light",
  att: "[★8] 2500/3000",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/8165596.jpg',
  descripcion: '2 Level 8 monsters',
  extra: 'If this card has a "Photon" card as material, it cannot be destroyed by card effects. You can only use each of the following effects of "Number 90: Galaxy-Eyes Photon Lord" once per turn.',
  extra1:'● When an opponents monster activates its effect (Quick Effect): You can detach 1 material from this card; negate that monsters effect, and if the detached material was a "Galaxy" card, destroy that card.',
  extra2:'● During your opponents turn (Quick Effect): You can take 1 "Photon" or "Galaxy" card from your Deck, and either add it to your hand or attach it to this card as material.',
  extra3:''
}

const Carta_des_22 ={
  name: 'Number 62: Galaxy-Eyes Prime Photon Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★8] 4000/3000",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/31801517.jpg',
  descripcion: '2 Level 8 monsters',
  extra: 'If this card battles, during damage calculation (Quick Effect): You can detach 1 material from this card once per battle; this card gains ATK equal to the combined Ranks of all Xyz Monsters currently on the field x 200, during that damage calculation only. If this card in its owners control is destroyed by an opponents card effect while it has "Galaxy-Eyes Photon Dragon" as material: You can Special Summon this card during your 2nd Standby Phase after activation and double its ATK. Any battle damage this card inflicts to your opponent is halved unless it has "Galaxy-Eyes Photon Dragon" as material.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_23 ={
  name: 'Starliege Photon Blast Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★4] 1800/2500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/16643334.jpg',
  descripcion: '2 Level 4 monsters',
  extra: 'If this card is Xyz Summoned: You can Special Summon 1 "Photon" monster from your hand. While this Xyz Summoned monster is on the field, your opponent cannot target monsters you control with 2000 or more ATK with card effects, also they cannot be destroyed by your opponents card effects. Once per opponents turn (Quick Effect): You can detach 1 material from this card, then target 1 of your "Galaxy-Eyes Photon Dragon" that is banished or in your GY; Special Summon it.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_24 ={
  name: 'Number 38: Hope Harbinger Dragon Titanic Galaxy',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★8] 3000/2500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/63767246.jpg',
  descripcion: '2 Level 8 monsters',
  extra: 'Once per turn, when a Spell Card or effect is activated on the field (Quick Effect): You can negate that effect, and if you do, attach that card to this card as material. When an opponents monster declares an attack: You can detach 1 material from this card; change the attack target to this card and perform damage calculation. If a face-up Xyz Monster(s) you control is destroyed by battle or card effect: You can target 1 face-up Xyz Monster you control; it gains ATK equal to 1 of those destroyed monsters original ATK.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_25 ={
  name: 'Galaxy-Eyes Full Armor Photon Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★8] 4000/3500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/39030163.jpg',
  descripcion: '3 Level 8 monsters',
  extra: 'You can also Xyz Summon this card by using a "Galaxy-Eyes" Xyz Monster you control as material, except "Galaxy-Eyes Full Armor Photon Dragon". (Transfer its materials to this card.) Once per turn: You can target up to 2 Equip Cards equipped to this card; attach them to this card as material. Once per turn: You can detach 1 material from this card, then target 1 face-up card your opponent controls; destroy it.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_26 ={
  name: 'Number 107: Galaxy-Eyes Tachyon Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★8] 3000/2500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/88177324.jpg',
  descripcion: '2 Level 8 monsters',
  extra: 'Once per Battle Phase, at the start of your Battle Phase: You can detach 1 material from this card; negate the effects of all other face-up monsters currently on the field, also their ATK/DEF become their original ATK/DEF. During the Battle Phase, if you activated this effect this turn, each time an opponents card effect resolves, this card gains 1000 ATK until the end of the Battle Phase, also, it can make a second attack during each Battle Phase this turn.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_27 ={
  name: 'Galaxy-Eyes Cipher Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★8] 3000/2500",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/18963306.jpg',
  descripcion: '2 Level 8 monsters',
  extra: 'Once per turn: You can detach 1 material from this card, then target 1 face-up monster your opponent controls; monsters you control cannot attack your opponent directly for the rest of this turn, except this card, also take control of the targeted monster until the End Phase, but while this effect is applied, it has its effects negated, its ATK becomes 3000, also its name becomes "Galaxy-Eyes Cipher Dragon".',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_28 ={
  name: 'Galaxy-Eyes Cipher X Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★10] 4000/3000",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/28346136.jpg',
  descripcion: '2 Level 10 monsters',
  extra: 'Once per turn, you can also Xyz Summon "Galaxy-Eyes Cipher X Dragon" by using a "Cipher Dragon" monster you control as material. (Transfer its materials to this card.) You can detach 2 materials from this card; your opponent cannot target LIGHT monsters you control with card effects, until the end of your opponents turn. Once per turn, during your Standby Phase: You can return 1 Rank 9 or lower Dragon Xyz Monster from your GY to the Extra Deck, then you can Special Summon that monster from your Extra Deck, by using this card you control as material. (This is treated as an Xyz Summon. Transfer this cards materials to the Summoned monster.)',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_29 ={
  name: 'Galaxy-Eyes Cipher Blade Dragon',
  type: "[Monster|Effect|Xyz] Dragon/Light",
  att: "[★9] 3200/2800",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/2530830.jpg',
  descripcion: '3 Level 9 monsters',
  extra: 'You can also Xyz Summon this card by using a Rank 8 "Galaxy-Eyes" Xyz Monster you control as material. (Transfer its materials to this card.) Cannot be used as material for an Xyz Summon. Once per turn: You can detach 1 material from this card, then target 1 card on the field; destroy it. If this Xyz Summoned card you control, is destroyed by battle with an opponents attacking monster, or destroyed by an opponents card effect, and sent to your GY: You can target 1 "Galaxy-Eyes Cipher Dragon" in your GY; Special Summon it.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_30 ={
  name: 'Divine Dragon Knight Felgrand',
  type: "[Monster|Effect|Xyz] Warrior/Light",
  att: "[★8] 2800/1800",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/1639384.jpg',
  descripcion: '2 Level 8 monsters',
  extra: 'Once per turn, during either players turn: You can detach 1 Xyz Material from this card, then target 1 face-up monster on the field; this turn, its effects are negated, but it is unaffected by other card effects.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_31 ={
  name: 'Divine Arsenal AA-ZEUS - Sky Thunder',
  type: "[Monster|Effect|Xyz] Machine/Light",
  att: "[★12] 3000/3000",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/90448279.jpg',
  descripcion: '2 Level 12 monsters',
  extra: 'Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-ZEUS - Sky Thunder" by using 1 Xyz Monster you control as material. (Transfer its materials to this card.) (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY. Once per turn, if another card(s) you control is destroyed by battle or an opponents card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_32 ={
  name: 'Galaxy-Eyes Solflare Dragon',
  type: "[Monster|Effect|Link] Dragon/Light",
  att: "[↙↘] 2000/LINK-2",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/3356494.jpg',
  descripcion: '2 LIGHT monsters, including a monster with 2000 or more ATK',
  extra: 'If this card is Link Summoned: You can target 1 "Photon" or "Galaxy" monster in your GY; add it to your hand. During your opponents Main Phase (Quick Effect): You can discard 1 "Photon" card and 1 "Galaxy" card, OR discard 1 "Galaxy-Eyes Photon Dragon", then target 1 Special Summoned monster your opponent controls; destroy it. You can only use each effect of "Galaxy-Eyes Solflare Dragon" once per turn.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_33 ={
  name: 'Union Carrier',
  type: "[Monster|Effect|Link] Machine/Light",
  att: "[→↓] 1000/LINK-2",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/83152482.jpg',
  descripcion: '2 monsters with the same Type or Attribute',
  extra: 'Cannot be used as Link Material the turn it is Link Summoned. You can target 1 face-up monster you control; equip 1 monster to it from your hand or Deck with its same original Type or Attribute. The equipped monster gains 1000 ATK. If you equipped it from the Deck, you cannot Special Summon monsters with that Equip Cards name for the rest of this turn. You can only use this effect of "Union Carrier" once per turn.',
  extra1:'',
  extra2:'',
  extra3:''
}

const Carta_des_34 ={
  name: 'Isolde, Two Tales of the Noble Knights',
  type: "[Monster|Effect|Link] Warrior/Light",
  att: "[↙↘] 1600/LINK-2",
  url: 'https://raw.githubusercontent.com/OlacarynCloudWorld/TheOlacarynCloud/951fdd7/59934749.jpg',
  descripcion: '2 Warrior monsters',
  extra: 'If this card is Link Summoned: You can add 1 Warrior monster from your Deck to your hand, but for the rest of this turn, you cannot Normal Summon/Set or Special Summon monsters with that name, nor activate their monster effects. You can send any number of Equip Spells with different names from your Deck to the GY; Special Summon 1 Warrior monster from your Deck, whose Level equals the number of cards sent to the GY. You can only use each effect of "Isolde, Two Tales of the Noble Knights" once per turn.',
  extra1:'',
  extra2:'',
  extra3:''
}


const CardDescription = (props) => {
  console.log(props)
  console.log("corriendo")
    return(
      <div className="body_left">
        <div className="nombre_carta">
          {props.name}
        </div>
        <div className="Imagen_Carta">
          <img src={props.url} />
        </div>
        <div className="descripcion_Carta">
          <p>{props.type}</p>
          <p>{props.att}</p>
          <p>{props.descripcion}</p>
          <p>{props.extra}</p>
          <p>{props.extra1}</p>
          <p>{props.extra2}</p>
          <p>{props.extra3}</p>
        </div>

      </div>
    );
  
}

const Body = () => {

    const [escogido, setEscogido] = useState(Carta_des_0);

    const chooseCard = (card) => {
      setEscogido(card)
    }

    return (
      <div className="Body">
        <div className="left">
          {escogido && CardDescription(escogido)}
        </div>
        <div className="center">
          <div className="Main">
            <div className="Text">Main [40]</div>
            <div className="monster_card">.</div>
            <div className="monster">[27]</div>
            <div className="spell_card">.</div>
            <div className="spell">[13]</div>
          </div>
          <div className="Deck">
            <div className="Carta_1" onClick={() => chooseCard(Carta_des_1)}></div>
            <div className="Carta_1" onClick={() => chooseCard(Carta_des_1)}></div>
            <div className="Carta_1" onClick={() => chooseCard(Carta_des_1)}></div>
            <div className="Carta_2" onClick={() => chooseCard(Carta_des_2)}></div>
            <div className="Carta_2" onClick={() => chooseCard(Carta_des_2)}></div>
            <div className="Carta_3" onClick={() => chooseCard(Carta_des_3)}></div>
            <div className="Carta_3" onClick={() => chooseCard(Carta_des_3)}></div>
            <div className="Carta_3" onClick={() => chooseCard(Carta_des_3)}></div>
            <div className="Carta_4" onClick={() => chooseCard(Carta_des_4)}></div>
            <div className="Carta_4" onClick={() => chooseCard(Carta_des_4)}></div>
            <div className="Carta_4" onClick={() => chooseCard(Carta_des_4)}></div>
            <div className="Carta_5" onClick={() => chooseCard(Carta_des_5)}></div>
            <div className="Carta_6" onClick={() => chooseCard(Carta_des_6)}></div>
            <div className="Carta_7" onClick={() => chooseCard(Carta_des_7)}></div>
            <div className="Carta_7" onClick={() => chooseCard(Carta_des_7)}></div>
            <div className="Carta_8" onClick={() => chooseCard(Carta_des_8)}></div>
            <div className="Carta_8" onClick={() => chooseCard(Carta_des_8)}></div>
            <div className="Carta_8" onClick={() => chooseCard(Carta_des_8)}></div>
            <div className="Carta_9" onClick={() => chooseCard(Carta_des_9)}></div>
            <div className="Carta_9" onClick={() => chooseCard(Carta_des_9)}></div>
            <div className="Carta_9" onClick={() => chooseCard(Carta_des_9)}></div>
            <div className="Carta_10" onClick={() => chooseCard(Carta_des_10)}></div>
            <div className="Carta_11" onClick={() => chooseCard(Carta_des_11)}></div>
            <div className="Carta_11" onClick={() => chooseCard(Carta_des_11)}></div>
            <div className="Carta_12" onClick={() => chooseCard(Carta_des_12)}></div>
            <div className="Carta_12" onClick={() => chooseCard(Carta_des_12)}></div>
            <div className="Carta_13" onClick={() => chooseCard(Carta_des_13)}></div>
            <div className="Carta_14" onClick={() => chooseCard(Carta_des_14)}></div>
            <div className="Carta_14" onClick={() => chooseCard(Carta_des_14)}></div>
            <div className="Carta_14" onClick={() => chooseCard(Carta_des_14)}></div>
            <div className="Carta_15" onClick={() => chooseCard(Carta_des_15)}></div>
            <div className="Carta_15" onClick={() => chooseCard(Carta_des_15)}></div>
            <div className="Carta_15" onClick={() => chooseCard(Carta_des_15)}></div>
            <div className="Carta_16" onClick={() => chooseCard(Carta_des_16)}></div>
            <div className="Carta_17" onClick={() => chooseCard(Carta_des_17)}></div>
            <div className="Carta_18" onClick={() => chooseCard(Carta_des_18)}></div>
            <div className="Carta_18" onClick={() => chooseCard(Carta_des_18)}></div>
            <div className="Carta_18" onClick={() => chooseCard(Carta_des_18)}></div>
            <div className="Carta_19" onClick={() => chooseCard(Carta_des_19)}></div>
            <div className="Carta_20" onClick={() => chooseCard(Carta_des_20)}></div>
          </div>
          <div className="Extra">
            <div className="Extra_text">Extra [15]</div>
            <div className="xyz_card">.</div>
            <div className="xyz">[11]</div>
            <div className="link_card">.</div>
            <div className="link">[4]</div>
          </div>
        </div>
        <div className="Extra_deck">
          <div className="Carta_21" onClick={() => chooseCard(Carta_des_21)}></div>
          <div className="Carta_22" onClick={() => chooseCard(Carta_des_22)}></div>
          <div className="Carta_23" onClick={() => chooseCard(Carta_des_23)}></div>
          <div className="Carta_24" onClick={() => chooseCard(Carta_des_24)}></div>
          <div className="Carta_25" onClick={() => chooseCard(Carta_des_25)}></div>
          <div className="Carta_26" onClick={() => chooseCard(Carta_des_26)}></div>
          <div className="Carta_27" onClick={() => chooseCard(Carta_des_27)}></div>
          <div className="Carta_28" onClick={() => chooseCard(Carta_des_28)}></div>
          <div className="Carta_29" onClick={() => chooseCard(Carta_des_29)}></div>
          <div className="Carta_30" onClick={() => chooseCard(Carta_des_30)}></div>
          <div className="Carta_31" onClick={() => chooseCard(Carta_des_31)}></div>
          <div className="Carta_32" onClick={() => chooseCard(Carta_des_32)}></div>
          <div className="Carta_32" onClick={() => chooseCard(Carta_des_32)}></div>
          <div className="Carta_33" onClick={() => chooseCard(Carta_des_33)}></div>
          <div className="Carta_34" onClick={() => chooseCard(Carta_des_34)}></div>
        </div>
        <div className="Side">
          <div className="Side_text">Side</div>
        </div>
        <div className="Side_deck"></div>
        <div className="rigth">
          <div className="box_rigth">
            <div className="box_rigth_top_text">Enter Card Name...</div>
            <div>
              <button className="box_rigth_bot_text"> ↓ Show Filters ↓</button>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Body