var hero_Brute = {
	Name: "Brute",
	RealName: "Aiden Jackson",
	Str: 12,
	Sta: 12,
	Agl: 2,
	Dex: 2,
	Fgt: 4,
	Int: -1,
	Awe: 4,
	Pre: 3,
	
	Fort: 12,
	Will: 8,
	Dodge: 5,
	Parry: 5,
	Toughness: 15,
	DamageTaken: 0,
	
	AdvArray: ["Fast Grab", "Improved Hold", "Interpose", "Takedown"],
	
	Acrobatics: 6,
	Athletics: 20,
	CloseCombat: 8,
	Deception: 7,
	Intimidation: 7,
	Persuasion: 7,
	RangedCombat: 2,
	Technology: -1,
	
	MeleeAttackPower: ["Ju-Jitsu", 10, 10],
	RangedAttackPower: ["Throw Improvised Weapon", 2, 10],
	MovementPower: ["Leaping", 7],
	DefensePower: ["Regeneration", 10],
	HeroPoints: 1
};

var hero_Mechanitrix = {
	Name: "Mechanitrix",
	RealName: "Shoshana 'Suzy' Schmitt",
	Str: -2,
	Sta: 4,
	Agl: 2,
	Dex: 2,
	Fgt: 2,
	Int: 12,
	Awe: 4,
	Pre: 4,
	
	Fort: 4,
	Will: 4,
	Dodge: 2,
	Parry: 2,
	Toughness: 4,
	DamageTaken: 0,
	
	AdvArray: ["Benefit: Wealth", "Inventor", "Sidekick", "Speed of Thought"],
	
	Acrobatics: 4,
	Athletics: 8,
	CloseCombat: 5,
	Deception: 14,
	Intimidation: 4,
	Persuasion: 14,
	RangedCombat: 5,
	Technology: 22,
	
	MovementPower: [],
	MeleeAttackPower: ["Unarmed", 5, -2],
	RangedAttackPower: ["Throw Improvised Weapon", 5, -2],
	DefensePower: [],	
	HeroPoints: 1,
	ApplyArmor: function() {
		this.Str = 10;
		this.Fgt = 10;
		this.Agl = 5;
		this.Sta = 10;
		this.Dex = 5;
		this.Awe = 10;
		
		this.Fort = 10;
		this.Will = 10;
		this.Toughness = 10;
		this.Dodge = 10;
		this.Parry = 10;
		
		this.CloseCombat = 10;
		this.RangedCombat = 10;
		
		this.MovementPower = ["Flight", 5];
		this.DefensePower = ["Impervious Toughness", 10];
		this.MeleeAttackPower = ["Powerfists", 10, 10];
		this.RangedAttackPower = ["Blasters", 10, 10];		
	},
	
	RemoveArmor: function() {
		this.Str = -2;
		this.Fgt = 2;
		this.Agl = 2;
		this.Sta = 4;
		this.Dex = 2;
		this.Awe = 4;
		
		this.Fort = 4;
		this.Will = 4;
		this.Toughness = 4;
		this.Dodge = 2;
		this.Parry = 2;
		
		this.CloseCombat = 5;
		this.RangedCombat = 5;
		
		this.MovementPower = [];
		this.MeleeAttackPower = ["Unarmed", 5, -2];
		this.RangedAttackPower = ["Throw Improvised Weapon", 5, -2];
		this.DefensePower = [];
	}
};
