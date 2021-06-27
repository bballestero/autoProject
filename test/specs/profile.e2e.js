const ProfilePage = require('../pageobjects/profile.page');

         describe('Terapeutica - Professional Profile ',()=>{
        /**
         * Verificar que este request se ejecute al cargar la pagina https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6
         */
            it('Verificar que el webservice correcto es llamado al ingresar a la página de detalles de perfil de un profesional.',()=>{
                browser.cdp('Network', 'enable')
                browser.on('Network.responseReceived', (params) => {
                    var lista=[params.response.url];
                    if ( lista.includes(ProfilePage.webservice) ) {
                        /* OK, value exists! */
                        console.log('El webservice dado se a encontrado con exito en la red');
                    }
                })
                 browser.url(ProfilePage.url);
            })
        })