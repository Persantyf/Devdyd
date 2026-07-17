import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="legal-page">
      <div class="container">
        <a routerLink="/" class="legal-back">← Volver al inicio</a>
        <h1>Aviso Legal</h1>
        <p class="legal-updated">Última actualización: julio 2026</p>

        <h2>1. Datos identificativos</h2>
        <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
        <ul>
          <li><strong>Denominación:</strong> DevDyD</li>
          <li><strong>Domicilio:</strong> Sevilla, España</li>
          <li><strong>Email de contacto:</strong> info&#64;devdyd.com</li>
          <li><strong>Teléfono:</strong> +34 666 08 71 61</li>
        </ul>

        <h2>2. Objeto y ámbito de aplicación</h2>
        <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>devdyd.com</strong> (en adelante, "el Sitio"), cuya titularidad corresponde a DevDyD. El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones.</p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>Todos los contenidos del Sitio —incluyendo, a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseños y demás elementos— son propiedad de DevDyD o de terceros que han autorizado su uso, y están protegidos por los derechos de propiedad intelectual e industrial.</p>
        <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin la autorización previa y por escrito de DevDyD, salvo en los casos previstos por la legislación vigente.</p>

        <h2>4. Exclusión de responsabilidad</h2>
        <p>DevDyD no se responsabiliza de los daños y perjuicios de cualquier naturaleza derivados de:</p>
        <ul>
          <li>La imposibilidad de acceso al Sitio o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
          <li>La presencia de virus o de otros elementos informáticos lesivos en los contenidos.</li>
          <li>El incumplimiento de las leyes, la buena fe, el orden público y las presentes condiciones de uso.</li>
        </ul>

        <h2>5. Política de privacidad y cookies</h2>
        <p>El tratamiento de los datos personales y el uso de cookies se regula en la <a routerLink="/privacidad">Política de Privacidad y Cookies</a>, disponible en este mismo sitio.</p>

        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto, ambas partes se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales de Sevilla.</p>
      </div>
    </div>
  `,
})
export class AvisoLegalComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
}
