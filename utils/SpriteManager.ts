export class SpriteManager {
    private images: { [key: string]: HTMLImageElement } = {};
    private loadedCount = 0;
    private totalCount = 0;
    private onAllLoaded: () => void;

    constructor(onAllLoaded: () => void) {
        this.onAllLoaded = onAllLoaded;
    }

    public loadImages(sources: { [key: string]: string }) {
        this.totalCount = Object.keys(sources).length;
        this.loadedCount = 0;

        console.log(`[SpriteManager] Starting to load ${this.totalCount} assets.`);

        if (this.totalCount === 0) {
            console.warn('[SpriteManager] No assets to load.');
            this.onAllLoaded();
            return;
        }

        for (const key in sources) {
            const img = new Image();
            img.src = sources[key];

            img.onload = () => {
                this.loadedCount++;
                console.log(`[SpriteManager] Loaded: ${key} (${this.loadedCount}/${this.totalCount})`);
                if (this.loadedCount === this.totalCount) {
                    console.log('[SpriteManager] All assets loaded. Starting game.');
                    this.onAllLoaded();
                }
            };

            img.onerror = (e) => {
                console.error(`[SpriteManager] Failed to load asset: ${key} - ${sources[key]}`, e);
                // Still increment to prevent hanging, but log error
                this.loadedCount++;
                if (this.loadedCount === this.totalCount) {
                    console.warn('[SpriteManager] All assets processed (with errors). Starting game.');
                    this.onAllLoaded();
                }
            };

            this.images[key] = img;
        }
    }

    public getImage(key: string): HTMLImageElement {
        return this.images[key];
    }

    public drawSprite(
        ctx: CanvasRenderingContext2D,
        key: string,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
    ) {
        const img = this.images[key];
        if (img && img.complete && img.naturalHeight !== 0) {
            try {
                ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            } catch (e) {
                // Suppress specific draw errors if needed
            }
        }
    }

    public drawTile(
        ctx: CanvasRenderingContext2D,
        key: string,
        tileIndex: number,
        tileSize: number, // Size of tile on source image (e.g. 16)
        dx: number,
        dy: number,
        dSize: number // Size to draw on canvas
    ) {
        const img = this.images[key];
        if (!img || !img.complete || img.naturalHeight === 0) return;

        const cols = Math.floor(img.width / tileSize);
        if (cols === 0) return;

        const sx = (tileIndex % cols) * tileSize;
        const sy = Math.floor(tileIndex / cols) * tileSize;

        try {
            ctx.drawImage(img, sx, sy, tileSize, tileSize, dx, dy, dSize, dSize);
        } catch (e) {
            // Suppress errors
        }
    }
}
