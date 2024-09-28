import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      questionText: 'La integridad es la propiedad de la información que busca evitar que esta sea modificada por una persona no autorizada.',
      answerOptions: [
        { answerText: 'Falso', isCorrect: false },
        { answerText: 'Verdadero', isCorrect: true },
      ],
    },
    {
      questionText: 'la dark web ofrece una capa de cifrado y anonimato que resulta beneficiosa para la actividad criminal.',
      answerOptions: [
        { answerText: 'Falso', isCorrect: false },
        { answerText: 'Verdadero', isCorrect: true },
      ],
    },
    {
      questionText: 'La biometría es una forma de autenticación que puede usarse como segundo factor de autenticación para mejorar la autorización en un sistema.',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true },
      ],
    },
    {
      questionText: 'A que se le llama web superficial',
      answerOptions: [
        { answerText: 'a los servicios que una empresa expone a internet,y por ende pueden ser atacados', isCorrect: false },
        { answerText: 'a todo el contenido de internet disponible publicamente', isCorrect: true },
        { answerText: 'a la primera capa de defensa en la red de una organizacion', isCorrect: false },
        { answerText: 'a las redes sociales empleadas por ciber-criminales para atraer a sus victimas', isCorrect: false },
      ],
    },
    {
      questionText: 'Según el NIST Cybersecurity Framework, ¿cuál es el primer paso para gestionar, mitigar y comunicar riesgos de ciberseguridad? Seleccione opción correcta:',
      answerOptions: [
        { answerText: 'Identificar activos informáticos y riesgos', isCorrect: true },
        { answerText: 'Identificar las herramientas de seguridad', isCorrect: false },
        { answerText: 'Identificar algoritmos criptográficos robustos', isCorrect: false },
        { answerText: 'Identificar backups faltantes', isCorrect: false }
      ],
    },
    {
      questionText: 'La industria, el país y los clientes con los que opera una organización determinarán su marco de gobierno externo. Las organizaciones deben implementar un marco de gobierno interno acorde a las leyes y regulaciones de su industria. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'El auditor utiliza como marco metodológico la resolución técnica N°53 (que modifica la Resolución técnica 37) para la realización de las actividades de auditoría, revisión, otros encargos de aseguramiento, certificaciones, servicios relacionados e informes de cumplimiento. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'En la conformación del comité de auditoría se puede prescindir del responsable máximo de auditoría interna siempre y cuando lo integren dos miembros del directorio o autoridad equivalente (por ejemplo, Consejo de administración). ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'Una de las funciones principales del Comité de Auditoría interna es realizar informes sobre ciclos relevantes y elevarlos a conocimiento del directorio. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'Además de la función mencionada en la pregunta anterior, otra/s que se pueden considerar dentro del área de incumbencia del comité de auditoría es/son: ¿Seleccione opción correcta?',
      answerOptions: [
        { answerText: 'Vigilar el funcionamiento de los sistemas de información computarizados', isCorrect: false },
        { answerText: 'Confeccionar el programa de trabajo anual del área de auditoría interna', isCorrect: false },
        { answerText: 'Planificar las actividades de auditoría interna', isCorrect: false },
        { answerText: 'Todas las anteriores', isCorrect: true }
      ]
    },
    {
      questionText: 'En la auditoría interna no es necesario cumplir con la independencia (real y aparente). Esta condición solo aplica para las auditorías externas. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'Dentro del riesgo de auditoría se encuentra el riesgo de detección que se materializa ante errores, fallas u omisiones que no son detectados en tiempo oportuno por el sistema de control interno del ente. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'Dentro del desarrollo de un proceso de auditoría existen diferentes tipos de procesos a fin de poder concluir si la información está libre de incorrecciones significativas. Dos importantes son las pruebas de controles y las pruebas sustantivas. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'Las pruebas sustantivas prueban la validez de un proceso/sistemas de información para evaluar el funcionamiento de sus controles. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'En los servicios de consultoría se evalúan evidencias y expresan opiniones y conclusiones sobre una entidad, operación, función, proceso, sistema, etc. El alcance es definido por las partes intervinientes (auditor interno y cliente del trabajo). ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'En los informes de controles de una organización de Tipo 1 se incluyen las observaciones y recomendaciones respecto al diseño y eficacia operativa de los controles según las pruebas de controles realizadas por el auditor. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'Un informe de auditoría interna sobre el ciclo de “tercerización” tendría que contar con:',
      answerOptions: [
        { answerText: 'El alcance de las tareas', isCorrect: false },
        { answerText: 'Personal entrevistado', isCorrect: false },
        { answerText: 'Alcance – En función de la criticidad', isCorrect: false },
        { answerText: 'Todas son correctas', isCorrect: true }
      ]
    },
    {
      questionText: 'Para el ejercicio profesional de la auditoría, usted puede acudir a los modelos de Informes de Auditoría, Revisión, Otros Encargos de Aseguramiento, Certificaciones, Servicios Relacionados e Informes de Cumplimiento que se encuentran en el Informe N°17. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'La caída del banco “Barings” y la quiebra de “Enron” fueron eventos relevantes para impulsar nuevas leyes y normativas para reforzar el sistema de control interno de las organizaciones a nivel mundial. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'Las fuentes potenciales (causa) de riesgos se encuentran en los elementos o actividades que tienen la potencialidad de generar eventos o sucesos no deseados. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'El riesgo residual es el riesgo que permanece después del tratamiento de riesgos a través del proceso de selección y puesta en operación de medidas para abordar el riesgo. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'El riesgo residual siempre coincide con el nivel de riesgo que una entidad está dispuesta a aceptar (apetito de riesgo) en el logro de sus estrategias y objetivos corporativos. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'Dentro de los elementos del control, el grupo de control tiene como misión detectar e informar desvíos (por ejemplo, ante incumplimiento normativo) para que el grupo actuante realice alguna corrección en el sistema operante. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'Los controles preventivos actúan sobre la causa de los riesgos con el fin de disminuir la probabilidad de ocurrencia del evento no deseado. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'En las entidades financieras, ante cualquier situación que no se pueda cumplir con los requisitos mínimos establecidos en el marco normativo se pueden diseñar e implementar controles compensatorios. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'El directorio o autoridad equivalente (por ejemplo, consejo de administración) desempeña una función de supervisión de la gestión de riesgos que ayuda a apoyar la creación de valor en una entidad y a evitar su declive. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'La dependencia de la auditoría interna de la Dirección asegura que su labor esté libre de obstáculos y sesgos en la planificación y realización de su trabajo. Debe haber una interacción regular entre la auditoría interna y la Dirección para garantizar que la labor de la auditoría interna se alinee a lo requerido por la organización. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: '¿Cuál de las siguientes funciones no es responsabilidad de las primeras líneas de la organización en materia de tecnología y seguridad?',
      answerOptions: [
        { answerText: 'Identificación de los riesgos inherentes', isCorrect: false },
        { answerText: 'Aplicación de controles periódicos sobre los riesgos residuales', isCorrect: true },
        { answerText: 'Seguimiento para el cumplimiento de los planes de acción sobre los riesgos residuales significativos.', isCorrect: false },
        { answerText: 'Informar la identificación de riesgos nuevos durante el año', isCorrect: false }
      ]
    },
    {
      questionText: 'El área de Seguridad Informática debe contar con un Comité, el cual deberá reunirse periódicamente para garantizar el seguimiento de las acciones del área, junto a los controles y proyectos realizados, que permitan entender la situación actual del área. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {        
      questionText: 'El Directorio (o autoridad equivalente) tiene entre sus funciones:',
      answerOptions: [
        { answerText: 'Dirigir las funciones de las áreas de Tecnología Informática y Seguridad de la Información', isCorrect: false },
        { answerText: 'Definir nuevas tecnologías a utilizar por las áreas y establecer cambios de seguridad', isCorrect: false },
        { answerText: 'Monitorear el desempeño del gobierno de tecnología y seguridad de la información, para cumplir con las metas y objetivos establecidos', isCorrect: false },
        { answerText: 'Todas las anteriores', isCorrect: true }
      ]
    },
    {
      questionText: 'Según el marco COSO (“gestión del riesgo empresarial Integrando Estrategia y Desempeño”) únicamente se debe contemplar el riesgo respecto a una estrategia elegida. Bajo este framework, no es relevante evaluar la posibilidad de que una estrategia no esté alineada con la misión, visión y valores de una organización. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: false },
        { answerText: 'Falso', isCorrect: true }
      ]
    },
    {
      questionText: 'El proceso de gestión de riesgo operacional abarca:',
      answerOptions: [
        { answerText: 'El seguimiento de los riesgos identificados', isCorrect: false },
        { answerText: 'La ponderación de las debilidades operacionales', isCorrect: false },
        { answerText: 'La aplicación de medidas de mitigación', isCorrect: false },
        { answerText: 'Todas son correctas', isCorrect: true }
      ]
    },
    {
      questionText: 'En la gestión de riesgos es necesario identificar y evaluar aquellos riesgos que puedan afectar a la consecución de los objetivos estratégicos y de negocio. Posteriormente, la organización selecciona las respuestas ante el riesgo y adopta una visión a nivel de cartera con respecto al nivel de riesgo que ha asumido. Los resultados de este proceso se comunican a las principales partes interesadas en el riesgo. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'El apetito al riesgo es:',
      answerOptions: [
        { answerText: 'La Brecha entre los riesgos identificados y los existentes', isCorrect: false },
        { answerText: 'El nivel de aceptación que tiene la organización sobre los peligros del negocio', isCorrect: true },
        { answerText: 'Aquellos riesgos máximos que la organización no está dispuesta a asumir', isCorrect: false },
        { answerText: 'La valoración general de un proceso de negocio', isCorrect: false }
      ]
    },
    {
      questionText: 'Las entidades financieras deben definir capacitaciones y vías de concientización en seguridad basado en temas o casos de seguridad actuales hacia:',
      answerOptions: [
        { answerText: 'Colaboradores (internos y externos)', isCorrect: false },
        { answerText: 'Clientes', isCorrect: false },
        { answerText: 'Usuarios del sistema financiero', isCorrect: false },
        { answerText: 'Todas las anteriores', isCorrect: true }
      ]
    },
    {
      questionText: 'El área de seguridad de la información debe realizar reportes de gestión periódicos, que se deben comunicar a la alta gerencia de directorio, pudiendo ser su contenido temas como el análisis y resultado de los controles realizados por el área, el análisis de desvíos y definición de planes correctivos, entre otros. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'Su sobrino le comenta que encontró un video de YouTube donde explica cómo descargar de forma gratuita un juego que normalmente es pago, y que después de almuerzo lo va a descargar. ¿A qué riesgos se está exponiendo? Seleccione la mejor respuesta de las opciones proporcionadas.',
      answerOptions: [
        { answerText: 'Virus', isCorrect: false },
        { answerText: 'Gusano', isCorrect: false },
        { answerText: 'Spyware', isCorrect: false },
        { answerText: 'Troyano', isCorrect: true }
      ]
    },
    {
      questionText: '¿Qué es el SIM swapping y qué objetivo persiguen los atacantes al llevar a cabo este tipo de ataque? Seleccione la mejor respuesta de las opciones proporcionadas.',
      answerOptions: [
        { answerText: 'Es una técnica de denegación de servicio que apunta a sobrecargar los servidores de los proveedores de telefonía móvil, causando una interrupción de los servicios', isCorrect: false },
        { answerText: 'Es un método para interceptar las comunicaciones de una víctima al suplantar su tarjeta SIM, con el fin de obtener acceso no autorizado a sus cuentas y servicios en línea', isCorrect: true },
        { answerText: 'Es un tipo de malware que se propaga a través de las redes móviles, infectando los dispositivos y robando la información confidencial de los usuarios', isCorrect: false },
        { answerText: 'Es un método utilizado por los servicios de inteligencia para arrastrar las comunicaciones de los individuos', isCorrect: false }
      ]
    },
    {
      questionText: 'Un exploit de día cero es una forma de explotar una vulnerabilidad de hardware, firmware o software previamente desconocida para la organización responsable de su desarrollo y actualización. Se requieren profundos conocimientos técnicos para conseguir uno. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: '¿De qué manera la Inteligencia Artificial generativa está ayudando a los cibercriminales? Seleccione la mejor respuesta de las opciones proporcionadas.',
      answerOptions: [
        { answerText: 'Facilita la creación de malware y reacción de mail de Phishing', isCorrect: false },
        { answerText: 'Permite cubrir los rastros luego de una intrusión no autorizada en un sistema', isCorrect: false },
        { answerText: 'Automatiza la detección de vulnerabilidades en la web superficial', isCorrect: false },
        { answerText: 'Todas las anteriores', isCorrect: true }
      ]
    },
    {
      questionText: 'Un penetration test es donde el ataque es realizado desde internet, pero sin conocimiento del funcionamiento interno del sistema objetivo es denominado caja negra. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
       ]
    },
    {
      questionText: '¿Qué implica el término hacking ético? Seleccione la mejor respuesta de las opciones proporcionadas.',
      answerOptions: [
        { answerText: 'Realizar pruebas autorizadas de seguridad en sistemas informáticos con el fin de identificar y reportar responsablemente sus vulnerabilidades', isCorrect: true },
        { answerText: 'Desarrollar herramientas y técnicas para evaluar la seguridad de las redes y sistemas de organizaciones, con su consentimiento y fines legítimos', isCorrect: true },
        { answerText: 'Publicar investigaciones y papers técnicos que detalle metodologías de prueba y hallazgos de seguridad en sistemas informáticos de distinta índole', isCorrect: true },
        { answerText: 'Todas las anteriores', isCorrect: true }
      ]
    },
    {
      questionText: '¿Qué representan los Bug Bounty programs? Seleccione la mejor respuesta de las opciones proporcionadas.',
      answerOptions: [
        { answerText: 'Son programas donde las compañías recompensan económicamente a investigadores que identifican y reportan fallas de seguridad en sus aplicaciones o infraestructuras', isCorrect: true },
        { answerText: 'Son herramientas de ciberseguridad utilizadas para detectar errores en el código fuente del software', isCorrect: false },
        { answerText: 'Son técnicas de ataque utilizadas por hackers éticos para explotar vulnerabilidades en sistemas informáticos', isCorrect: false },
        { answerText: 'Son campañas publicitarias realizadas por empresas de ciberseguridad para promover sus productos y servicios', isCorrect: false }
      ]
    },
    {
      questionText: 'La diferencia entre el proceso de disaster recovery testing (DRT) y los Tabletop exercises (TTX) es que el primero es un ejercicio práctico mientras que el segundo es un ejercicio teórico para medir los tiempos de recuperación. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: 'Son tres los modelos clásicos de servicio de computación en la nube. ¿Cuál es el modelo que mayor responsabilidad delega al cliente de la nube?',
      answerOptions: [
        { answerText: 'IaaS (Infraestructura como Servicio)', isCorrect: true },
        { answerText: 'PaaS (Plataforma como Servicio)', isCorrect: false },
        { answerText: 'SaaS (Software como Servicio)', isCorrect: false }
      ]
    },
    {
      questionText: 'Para la elaboración de un BIA (Análisis de Impacto), ¿qué áreas o sectores tienen un rol preponderante?',
      answerOptions: [
        { answerText: 'Las áreas de tecnología y seguridad de la información (PAI)', isCorrect: false },
        { answerText: 'Las áreas que conforman la segunda línea y las que brindan asesoramiento experto', isCorrect: false },
        { answerText: 'Las áreas de negocio', isCorrect: true },
        { answerText: 'Ninguna de las anteriores', isCorrect: false }
      ]
    },
    {
      questionText: 'El principal objetivo de contar con una estrategia de continuidad de negocio es:',
      answerOptions: [
        { answerText: 'Cumplir con los requerimientos normativos regulatorios e internacionales', isCorrect: false },
        { answerText: 'Recuperar los procesos de negocio definidos como críticos y seguir operando', isCorrect: true },
        { answerText: 'Realizar las pruebas integrales sobre los procesos críticos', isCorrect: false },
        { answerText: 'Reducir el impacto del evento que causa la interrupción y evitar la futura', isCorrect: false }
      ]
    },
    {
      questionText: 'Tanto el RPO como el RTO son considerados como los parámetros de mayor relevancia en el proceso de gestión de la continuidad. Son los tiempos que se obtienen por parte del negocio y son el input para determinar el orden de recuperación de los procesos de negocio. ¿Verdadero o Falso?',
      answerOptions: [
        { answerText: 'Verdadero', isCorrect: true },
        { answerText: 'Falso', isCorrect: false }
      ]
    },
    {
      questionText: "El RPO representa el tiempo máximo que requiere una organización para la recuperación de sus sistemas después de un incidente o desastre. Este tiempo se mide desde el incidente hasta el momento o tiempo que la organización posee la información faltante o pérdida debido al incidente o evento disruptivo.",
      answerOptions: [
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Falso", isCorrect: true },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false }
      ]
    },
    {
      questionText: "Los sistemas aplicativos deben generar registros de auditoría de todas las operaciones realizadas por los usuarios finales con el fin de garantizar la trazabilidad del proceso realizado.",
      answerOptions: [
        { answerText: "Verdadero", isCorrect: true },
        { answerText: "Falso", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false }
      ]
    }
    // Puedes agregar más preguntas aquí
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0); // Maneja la pregunta actual
  const [selectedOption, setSelectedOption] = useState(''); // Maneja la respuesta seleccionada
  const [message, setMessage] = useState(''); // Mensaje de respuesta
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // Para mostrar la respuesta correcta

  // Manejar el cambio en la opción seleccionada
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedAnswer = questions[currentQuestion].answerOptions.find(
      (option) => option.answerText === selectedOption
    );

    if (selectedAnswer && selectedAnswer.isCorrect) {
      setMessage('¡Correcto! Esa es la respuesta correcta.');
    } else {
      setMessage('Incorrecto. La respuesta correcta es:');
      setShowCorrectAnswer(true); // Mostrar la respuesta correcta
    }

    // Cambiar a la siguiente pregunta
    setTimeout(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length); // Cambia a la siguiente pregunta
      setSelectedOption(''); // Reinicia la opción seleccionada
      setShowCorrectAnswer(false); // Reinicia la visibilidad de la respuesta correcta
      setMessage(''); // Reinicia el mensaje
    }, 2000); // Cambia después de 2 segundos
  };

  return (
    <div>
      <h2>{questions[currentQuestion].questionText}</h2>
      <form onSubmit={handleSubmit}>
        {questions[currentQuestion].answerOptions.map((option, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz"
              value={option.answerText}
              checked={selectedOption === option.answerText}
              onChange={handleOptionChange}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor={`option-${index}`}>{option.answerText}</label>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
      
      {message && <p>{message}</p>} {/* Muestra el mensaje si es correcto o incorrecto */}
      
      {/* Muestra la respuesta correcta si la respuesta es incorrecta */}
      {showCorrectAnswer && (
        <p>
          {questions[currentQuestion].answerOptions.find(option => option.isCorrect).answerText}
        </p>
      )}
    </div>
  );
};

export default Quiz;
