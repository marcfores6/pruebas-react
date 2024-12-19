import componentsImg from '@/public/images/components.png';
import configImg from '@/public/images/config.png';
import jsxuiImg from '@/public/images/jsx-ui.png';
import statemgmtImg from '@/public/images/state-mgmt.png';


export const CORE_CONCEPTS = [
    {
        title: 'Componentes',
        image: componentsImg,
        description: 'Elemento básico de la UI - La interfaz de usuario se compone combinando varios componentes',
    },
    {
        title: 'JSX',
        image: jsxuiImg,
        description: 'Crea código del estilo HTML potencialmente dinámico para definir el renderizado final de la página',
    },
    {
        title: 'Props',
        image: configImg,
        description: 'Haz tus componentes configurables (y reusables) mediante el paso de datos de entrada',
    },
    {
        title: 'State',
        image: statemgmtImg,
        description: 'Datos gestionados por React que con los cambios de valor, provocan el renderizado del componentes para actualizar la UI al cambio',
    },
];
export const EXAMPLES = {
    components: {
        title: 'Componentes',
        description:
            'Los components son las piezas básicas de las aplicaciones en React. Un componente es un módulo autocontenido (HTML + CSS opcional + JS) que muestra una salida.',
        code: 
        ` function Welcome() {
        return <h1>Hello, World!</h1>;
        }`,
    },
    jsx: {
        title: 'JSX/TSX',
        description:
            'JSX es una extensión de la sintaxis de JavaScript. Se parece a una plantilla, pero tiene toda la potencia de JavaScrip (p. ej. puede mostrar contenido dinámico).',
        code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
        title: 'Props',
        description:
            'Los componentes pueden aceptar entradas de cualquier tipo de datos llamadas props. Son como los argumentos de las funciones.',
        code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
        title: 'State',
        description:
            'El estado permite a los compomentes de React cambiar la salida a lo largo del tiempo en respuesta a eventos y/o respuestas de red.',
        code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
};