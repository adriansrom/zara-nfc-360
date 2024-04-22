export default async function getProductInfo(productId) {
    try {
        //TODO: MOCK
        return Promise.resolve({
            name: "CHALECO PUNTO " + productId,
            imageUrl: "https://static.zara.net/assets/public/3fae/218b/4f5b4c78a463/dd90a924dffd/T2222002004-p/T2222002004-p.jpg?ts=1713264110127&amp;w=720",
            description: "Chaleco de punto tejido en hilatura con mezcla de algodón y lino. Cuello redondo y manga sisa. Acabados en rib.",
            composition: "Chaleco de punto tejido en hilatura con mezcla de algodón y lino. Cuello redondo y manga sisa. Acabados en rib.Trabajamos con programas de seguimiento para garantizar el cumplimiento de nuestros estándares sociales, medioambientales y de seguridad y salud de nuestros productos. Para evaluar su cumplimiento hemos desarrollado un programa de auditorías y planes de mejora continua.",
            care: "Cuidar de tus prendas es cuidar del medioambiente. Lava tus prendas sólo cuando sea necesario, a veces es suficiente con ventilarlas. Los procesos de lavado desgastan poco a poco los tejidos, reduciéndo los lavados alargamos la vida de nuestras prendas y reducimos el consumo de agua y energía en procesos de cuidado.",
            origin: "Trabajamos con nuestros proveedores, trabajadores, sindicatos y organismos internacionales para desarrollar una cadena de suministro en la que se respetan y promueven los derechos humanos, contribuyendo a los Objetivos de Desarrollo Sostenible de Naciones Unidas. Gracias a la colaboración con nuestros proveedores, trabajamos para conocer las instalaciones y procesos que se emplean para fabricar nuestros productos con el objetivo de conocer su trazabilidad. Hecho en China"
        })
    } catch (error) {
        console.error(error);
    }
}