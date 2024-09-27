export const getSkillLevel = (actualXP: number, allLvlSkill: any[]): number => {
  let level = 0;
  for (let i = 0; i < allLvlSkill.length; i++) {
    if (actualXP >= allLvlSkill[i].totalExpRequired) {
      level = allLvlSkill[i].level;
    } else {
      break;
    }
  }
  return level;
};

export function formatToMillions(value: number): string {
  return (value / 1_000_000).toFixed(1);
}