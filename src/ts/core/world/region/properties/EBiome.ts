/**
 * Created by akersten on 8/19/17.
 */

import {Dice} from "../../../probability/Dice";

export enum EBiome {
    DESERT,
    FOREST,
    PLAINS,
    HILLS,
    ROCKS,
    SWAMP,
    WATER
}


export class Biome {

    /**
     * Pick a biome at random.
     * @returns {EAlignment}
     */
    static getRandomAlignment() : EBiome {
        return Dice.roll(7);
    }

    /**
     * Pick a biome based on the relative rarity of each biome.
     */
    static getRandomAlignmentWeighted() : EBiome {
        let weights = [100, 10, 40];

        return Dice.rollWeighted(weights);
    }
}