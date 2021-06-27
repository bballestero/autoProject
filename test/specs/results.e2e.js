const ResultsPage = require('../pageobjects/results.page');
const PersonName='María';

describe('Terapeutica - Results', () => {

    beforeEach(async ()=> {
        await ResultsPage.open();
    } )
    
    it('Validar que al cambiar entre las diferentes especialidades la URL cambia para reflejar la especialidad seleccionada.', async () => {
        /**
         * 1. Hacer click en cada una de las especialidades.
         * 2. Verificar la URL dada
         */
        await (await ResultsPage.btnFisica).click();
        await expect(browser).toHaveUrlContaining('phisical');

        await (await ResultsPage.btnLenguaje).click();
        await expect(browser).toHaveUrlContaining('language');

        await (await ResultsPage.btnOcupacional).click();
        await expect(browser).toHaveUrlContaining('ocupational');
    });

    it('Validar que al ingresar el texto Maria, y hacer clic en Buscar la pagina es refrescada y el primer resultado es un especialista con el nombre de Maria.', async () => {
        await (await ResultsPage.inputSearch).setValue(PersonName);
        await (await ResultsPage.btnSearch).click();
        await browser.refresh();
        await expect(await ResultsPage.lblName).toHaveTextContaining(PersonName);
    });

    it('Validar que al cambiar entre mapa y lista el mapa desaparece de la página.', async () => {
        await (await ResultsPage.btnlistMap).click();
        await expect(await ResultsPage.map).not.toBeDisplayed({time:1000});
        await (await ResultsPage.btnMap).click();
        await expect(await ResultsPage.map).toBeDisplayed({time:1000});
        await (await ResultsPage.btnMap).click();
        await expect(await ResultsPage.map).not.toBeDisplayed({time:1000});
    });
});
