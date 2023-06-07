import random

SKILLS = {
    "Dex" : ["Acrobatics", "Sleight of Hand", "Stealth"],
    "Int" : ["Arcana", "History", "Investigation", "Nature", "Religion"],
    "Wis" : ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
    "Cha" : ["Deception", "Performance", "Persuasion"]
}


egg = {
    "Name" : "Egg",
    "Str" : 8,
    "Dex" : 16,
    "Con" : 12,
    "Int" : 15,
    "Wis" : 20,
    "Cha" : 16,
    "Level" : 5,
    "Prof" : ["Animal Handling", "Nature", "Perception", "Survival"],
    "Level" : 5,
}


def get_proficiency_bonus(character):
    character["Prof Mod"] = 2 + (character["Level"] // 4)
    return character["Prof Mod"]


def mod_check(character, skill):
    if skill in character["Prof"]:
        proficiency = get_proficiency_bonus(character)
        print(f"{character['Name']} is proficient in {skill}, prof bonus is {proficiency}")
    else:
        proficiency = 0
        print(f"{character['Name']} is not proficient in {skill}")
    for i in SKILLS:
        if skill in SKILLS[i]:
            print(f"skill is {i}")
            return ((character[i] - 10) // 2) + proficiency

def roll_skill_check(character, skill):
    mod = int(mod_check(character, skill))
    print(f"modifier: {mod}")
    roll = random.randrange(21)
    print(f"roll: {roll}")
    if roll == 20:
        return str(roll + mod) + "-Crit!"
    else: 
        return roll + mod

def print_character_details(character):
    get_proficiency_bonus(character)
    print("Here are the character details:")
    for key, value in character.items():
        print(key, " : ", value )


print(roll_skill_check(egg, "Animal Handling"))
print("")
print_character_details(egg)

