    // src/Game.tsx
    import React, { useRef, useEffect } from 'react';

    const Game: React.FC = () => {
        const canvasRef = useRef<HTMLCanvasElement>(null);

        const drawField = (ctx: CanvasRenderingContext2D) => {
            // Очистка поля
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            // Рисование штаба
            ctx.fillStyle = 'red';
            ctx.fillRect(200, 200, 50, 50);

            // Рисование казарм
            ctx.fillStyle = 'blue';
            for (let i = 0; i < 5; i++) {
                ctx.fillRect(50 + i * 100, 400, 50, 50);
            }
        }

        useEffect(() => {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    drawField(ctx);
                }
            }
        }, []);

        return <canvas ref={canvasRef} width={800} height={600} />;
    };

    export default Game;