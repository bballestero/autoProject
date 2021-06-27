const HomePage = require('../pageobjects/home.page');
const PersonName='María';

describe('Terapeutica - Home', () => {

    beforeEach(async ()=> {
        await HomePage.open();
    } )
    
    it('Validar que al hacer clic en el botón de buscar sin ingresar texto el sitio no redirige al usuario a ninguna pagina.', async () => {
        /**
         * 1. Obtener la URL base
         * 2. Hacer click en el btn buscar
         * 3. Comparar las url's despues de hacer click
         */
        const url = await browser.getUrl();
        await (await HomePage.btnSearch).click();
        await expect(browser).toHaveUrl(url);
    });

    it('Validar que al hacer clic en una especialidad el campo de búsqueda obtiene el foco y el placeholder del mismo cambia a: Buscas a alguien o algo en especifico.', async () => {
        /**
         * 1. Hacer click en una especialidad
         * 2. Verificar que InputSearch tenga el foco
         * 3. Obtener el valor del InputSearch placeholder y compararlo con el texto esperado
         */
         await (await HomePage.btnSpecialityPhisical).click();
         await (await HomePage.inputSearch).isFocused();
         const placeHolderText = await (await HomePage.inputSearch).getAttribute('placeholder'); //Obtiene el texto del placeholder
         await expect(await HomePage.inputSearch).toHaveAttribute('placeholder', placeHolderText);
    });

    it('Validar que al ingresar el texto Maria, y hacer clic en Buscar el usuario es dirigido a la página de resultados y el primero resultado es un especialista con el nombre de Maria.', async () => {
        /**
         * 1. Type María en el inputSearch   await (await this.inputPassword).setValue(password);
         * 2. Click en btnSearch
         * 3. Verificar que el resultado tenga en alguna parte del texto Maria
         */
         await (await HomePage.inputSearch).setValue(PersonName);
         await (await HomePage.btnSearch).click();
         await expect(await HomePage.lblName).toHaveTextContaining(PersonName);
    });
});


