import './App.css';

function App() {
  return (
    <div className="curriculum-container">
      <h1 className="title">Curriculum Vitae</h1>

      <section className="section">
        <h2 className="section-title">Formación Profesional</h2>
        <ul>
          <li>Licenciado en Ingeniería de Sistemas</li>
          <li>Diplomado Experto en Desarrollo de Aplicaciones Empresariales</li>
          <li>Diplomado en Educación Superior Basado en Competencias</li>
          <li>Diplomado Docencia para Educación Virtual por Competencias</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Experiencia Profesional</h2>
        <ul>
          <li>Docente en la Escuela de Gestión Pública Plurinacional (EGPP)</li>
          <li>Ingeniero de Software Fullstack en Jalasoft</li>
          <li>Desarrollador de Software en el Departamento de Informática y Sistemas, Laboratorio de Desarrollo de la UMSS</li>
          <li>Desarrollador de Software en Getsoft S.A.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Hobbies</h2>
        <ul>
          <li>Viajar</li>
          <li>Ajedrez</li>
          <li>Piano</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
