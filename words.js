
// 5 letter nouns: 212
// 5 letter verbs: 91
// 4 letter nouns: 136
// 4 letter verbs: 116

// could be changed to a singular object ?
// const words = {
//    fiveLetterNouns: []
//    fourLetterNouns: [] etc...
//}

var fiveLetterNouns = [
    "Abuse",
    "Adult",
    "Agent",
    "Anger",
    "Apple",
    "Award",
    "Basis",
    "Beach",
    "Birth",
    "Block",
    "Blood",
    "Board",
    "Brain",
    "Bread",
    "Break",
    "Brown",
    "Buyer",
    "Cause",
    "Chain",
    "Chair",
    "Chest",
    "Chief",
    "Child",
    "China",
    "Claim",
    "Class",
    "Clock",
    "Coach",
    "Coast",
    "Court",
    "Cover",
    "Cream",
    "Crime",
    "Cross",
    "Crowd",
    "Crown",
    "Cycle",
    "Dance",
    "Death",
    "Depth",
    "Doubt",
    "Draft",
    "Drama",
    "Dream",
    "Dress",
    "Drink",
    "Drive",
    "Earth",
    "Enemy",
    "Entry",
    "Error",
    "Event",
    "Faith",
    "Fault",
    "Field",
    "Fight",
    "Final",
    "Floor",
    "Focus",
    "Force",
    "Frame",
    "Frank",
    "Front",
    "Fruit",
    "Glass",
    "Grant",
    "Grass",
    "Green",
    "Group",
    "Guide",
    "Heart",
    "Henry",
    "Horse",
    "Hotel",
    "House",
    "Image",
    "Index",
    "Input",
    "Issue",
    "Japan",
    "Jones",
    "Judge",
    "Knife",
    "Laura",
    "Layer",
    "Level",
    "Lewis",
    "Light",
    "Limit",
    "Lunch",
    "Major",
    "March",
    "Match",
    "Metal",
    "Model",
    "Money",
    "Month",
    "Motor",
    "Mouth",
    "Music",
    "Night",
    "Noise",
    "North",
    "Novel",
    "Nurse",
    "Offer",
    "Order",
    "Other",
    "Owner",
    "Panel",
    "Paper",
    "Party",
    "Peace",
    "Peter",
    "Phase",
    "Phone",
    "Piece",
    "Pilot",
    "Pitch",
    "Place",
    "Plane",
    "Plant",
    "Plate",
    "Point",
    "Pound",
    "Power",
    "Press",
    "Price",
    "Pride",
    "Prize",
    "Proof",
    "Queen",
    "Radio",
    "Range",
    "Ratio",
    "Reply",
    "Right",
    "River",
    "Round",
    "Route",
    "Rugby",
    "Scale",
    "Scene",
    "Scope",
    "Score",
    "Sense",
    "Shape",
    "Share",
    "Sheep",
    "Sheet",
    "Shift",
    "Shirt",
    "Shock",
    "Sight",
    "Simon",
    "Skill",
    "Sleep",
    "Smile",
    "Smith",
    "Smoke",
    "Sound",
    "South",
    "Space",
    "Speed",
    "Spite",
    "Sport",
    "Squad",
    "Staff",
    "Stage",
    "Start",
    "State",
    "Steam",
    "Steel",
    "Stock",
    "Stone",
    "Store",
    "Study",
    "Stuff",
    "Style",
    "Sugar",
    "Table",
    "Taste",
    "Terry",
    "Theme",
    "Thing",
    "Title",
    "Total",
    "Touch",
    "Tower",
    "Track",
    "Trade",
    "Train",
    "Trend",
    "Trial",
    "Trust",
    "Truth",
    "Uncle",
    "Union",
    "Unity",
    "Value",
    "Video",
    "Visit",
    "Voice",
    "Waste",
    "Watch",
    "Water",
    "While",
    "White",
    "Whole",
    "Woman",
    "World",
    "Youth",
];

var fiveLetterVerbs = [
    "Admit",
    "Adopt",
    "Agree",
    "Allow",
    "Alter",
    "Apply",
    "Argue",
    "Arise",
    "Avoid",
    "Begin",
    "Blame",
    "Break",
    "Bring",
    "Build",
    "Burst",
    "Carry",
    "Catch",
    "Cause",
    "Check",
    "Claim",
    "Clean",
    "Clear",
    "Climb",
    "Close",
    "Count",
    "Cover",
    "Cross",
    "Dance",
    "Doubt",
    "Drink",
    "Drive",
    "Enjoy",
    "Enter",
    "Exist",
    "Fight",
    "Focus",
    "Force",
    "Guess",
    "Imply",
    "Issue",
    "Judge",
    "Laugh",
    "Learn",
    "Leave",
    "Let’s",
    "Limit",
    "Marry",
    "Match",
    "Occur",
    "Offer",
    "Order",
    "Phone",
    "Place",
    "Point",
    "Press",
    "Prove",
    "Raise",
    "Reach",
    "Refer",
    "Relax",
    "Serve",
    "Shall",
    "Share",
    "Shift",
    "Shoot",
    "Sleep",
    "Solve",
    "Sound",
    "Speak",
    "Spend",
    "Split",
    "Stand",
    "Start",
    "State",
    "Stick",
    "Study",
    "Teach",
    "Thank",
    "Think",
    "Throw",
    "Touch",
    "Train",
    "Treat",
    "Trust",
    "Visit",
    "Voice",
    "Waste",
    "Watch",
    "Worry",
    "Would",
    "Write"
];

var fourLetterNouns = [
    "Area",
    "Army",
    "Baby",
    "Back",
    "Ball",
    "Band",
    "Bank",
    "Base",
    "Bill",
    "Body",
    "Book",
    "Call",
    "Card",
    "Care",
    "Case",
    "Cash",
    "City",
    "Club",
    "Cost",
    "Date",
    "Deal",
    "Door",
    "Duty",
    "East",
    "Edge",
    "Face",
    "Fact",
    "Farm",
    "Fear",
    "Fig",
    "File",
    "Film",
    "Fire",
    "Firm",
    "Fish",
    "Food",
    "Foot",
    "Form",
    "Fund",
    "Game",
    "Girl",
    "Goal",
    "Gold",
    "Hair",
    "Half",
    "Hall",
    "Hand",
    "Head",
    "Help",
    "Hill",
    "Home",
    "Hope",
    "Hour",
    "Idea",
    "Jack",
    "John",
    "Kind",
    "King",
    "Lack",
    "Lady",
    "Land",
    "Life",
    "Line",
    "List",
    "Look",
    "Lord",
    "Loss",
    "Love",
    "Mark",
    "Mary",
    "Mind",
    "Miss",
    "Move",
    "Name",
    "Need",
    "News",
    "Note",
    "Page",
    "Pain",
    "Pair",
    "Park",
    "Part",
    "Past",
    "Path",
    "Paul",
    "Plan",
    "Play",
    "Post",
    "Race",
    "Rain",
    "Rate",
    "Rest",
    "Rise",
    "Risk",
    "Road",
    "Rock",
    "Role",
    "Room",
    "Rule",
    "Sale",
    "Seat",
    "Shop",
    "Show",
    "Side",
    "Sign",
    "Site",
    "Size",
    "Skin",
    "Sort",
    "Star",
    "Step",
    "Task",
    "Team",
    "Term",
    "Test",
    "Text",
    "Time",
    "Tour",
    "Town",
    "Tree",
    "Turn",
    "Type",
    "Unit",
    "User",
    "View",
    "Wall",
    "Week",
    "West",
    "Wife",
    "Will",
    "Wind",
    "Wine",
    "Wood",
    "Word",
    "Work",
    "Year"
];

var fourLetterVerbs = [
    "Bear",
    "Beat",
    "Blow",
    "Burn",
    "Call",
    "Care",
    "Cast",
    "Come",
    "Cook",
    "Cope",
    "Cost",
    "Dare",
    "Deal",
    "Deny",
    "Draw",
    "Drop",
    "Earn",
    "Face",
    "Fail",
    "Fall",
    "Fear",
    "Feel",
    "Fill",
    "Find",
    "Form",
    "Gain",
    "Give",
    "Grow",
    "Hang",
    "Hate",
    "Have",
    "Head",
    "Hear",
    "Help",
    "Hide",
    "Hold",
    "Hope",
    "Hurt",
    "Join",
    "Jump",
    "Keep",
    "Kill",
    "Know",
    "Land",
    "Last",
    "Lead",
    "Lend",
    "Lift",
    "Like",
    "Link",
    "Live",
    "Look",
    "Lose",
    "Love",
    "Make",
    "Mark",
    "Meet",
    "Mind",
    "Miss",
    "Move",
    "Must",
    "Name",
    "Need",
    "Note",
    "Open",
    "Pass",
    "Pick",
    "Plan",
    "Play",
    "Pray",
    "Pull",
    "Push",
    "Read",
    "Rely",
    "Rest",
    "Ride",
    "Ring",
    "Rise",
    "Risk",
    "Roll",
    "Rule",
    "Save",
    "Seek",
    "Seem",
    "Sell",
    "Send",
    "Shed",
    "Show",
    "Shut",
    "Sign",
    "Sing",
    "Slip",
    "Sort",
    "Stay",
    "Step",
    "Stop",
    "Suit",
    "Take",
    "Talk",
    "Tell",
    "Tend",
    "Test",
    "Turn",
    "Vary",
    "View",
    "Vote",
    "Wait",
    "Wake",
    "Walk",
    "Want",
    "Warn",
    "Wash",
    "Wear",
    "Will",
    "Wish",
    "Work"
];