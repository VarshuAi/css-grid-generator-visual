
            const canv = document.getElementById('grid-canvas');
            const cols = document.getElementById('grid-c');
            
            window.genGrid = function() {
                canv.innerHTML = '';
                const c = parseInt(cols.value || 3);
                canv.style.gridTemplateColumns = `repeat(${c}, 1fr)`;
                for(let i=0; i < c*2; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'grid-cell';
                    canv.appendChild(cell);
                }
            }
            genGrid();
        