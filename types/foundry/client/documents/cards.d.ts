import { ClientBaseCards } from "./client-base-mixes.mjs";

declare global {
    /**
     * The client-side Cards document which extends the common BaseCards model.
     * Each Cards document contains CardsData which defines its data schema.
     */
    class Cards extends ClientBaseCards {}
}
