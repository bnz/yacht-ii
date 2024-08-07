import demonhunter from "@icons/war/class-demonhunter.svg"
import druid from "@icons/war/class-druid.svg"
import druidAlt from "@icons/war/class-druid-alt.svg"
import warlockAlt from "@icons/war/class-warlock-alt.svg"
import warlock from "@icons/war/class-warrior.svg"
import hunterAlt from "@icons/war/class-hunter-alt.svg"
import priest from "@icons/war/class-priest.svg"
import priestAlt from "@icons/war/class-priest-alt.svg"
import dog0 from "@icons/dog0.svg"
import dog1 from "@icons/dog1.svg"
import dog2 from "@icons/dog2.svg"
import dog3 from "@icons/dog3.svg"

type WarIcons = Record<string, string>

export const warIcons: WarIcons = {
    dog0: dog0,
    dog1: dog1,
    dog2: dog2,
    dog3: dog3,
    demonhunter: demonhunter,
    druid: druid,
    druidAlt: druidAlt,
    warlock: warlock,
    warlockAlt: warlockAlt,
    hunterAlt: hunterAlt,
    priest: priest,
    priestAlt: priestAlt,
}

export const warIconIds = Object.keys(warIcons)
