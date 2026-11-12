(function () {
  var SN = ['Sí', 'No'];
  var S = [
    { t: 'Datos del postulante', d: 'Usaremos estos datos para contactarte y, si la adopción avanza, para el contrato y la ficha de adopción.', q: [
      ['Nombre completo', 'text', { half: 1, ph: 'Nombre y apellidos', id: 'nombre' }],
      ['RUT', 'text', { half: 1, ph: '12.345.678-9', id: 'rut', hint: 'Se validará que sea un RUT chileno válido.' }],
      ['Edad', 'number', { half: 1, ph: 'Años', hint: 'Debes ser mayor de 18 años.', min: 18, max: 105, id: 'edad' }],
      ['Número de teléfono (WhatsApp)', 'tel', { half: 1, ph: '+56 9 1234 5678', id: 'telefono', hint: 'Incluye los 9 dígitos (ej.: +56 9 1234 5678).' }],
      ['Correo electrónico', 'email', { half: 1, ph: 'nombre@correo.cl' }],
      ['Ocupación', 'text', { half: 1, ph: 'Ej.: estudiante, docente, comerciante' }],
      ['Dirección', 'text', { ph: 'Calle, número, villa o población' }],
      ['Comuna', 'choice', { opts: ['Temuco', 'Padre Las Casas', 'Otra comuna de La Araucanía'] }]
    ]},
    { t: 'Mascota de interés', d: 'Cuéntanos qué compañero estás buscando. Nota: Indicar una mascota no asegura su reserva inmediata, esto se evalúa en la entrevista.', q: [
      ['¿Qué tipo de mascota quieres adoptar?', 'choice', { opts: ['Perro', 'Gato'] }],
      ['¿Cómo conociste a Los Arrabaleros?', 'choice', { opts: ['Jornada de adopción', 'Instagram', 'Facebook', 'WhatsApp', 'Recomendación de un conocido', 'Otro'] }],
      ['Si te interesa una mascota que hayamos publicado, indica su nombre', 'select', { opt: 1, ph: 'Nombre de la mascota', id: 'mascota_nombre', hint: 'Se muestran las mascotas actualmente disponibles para adopción.' }],
      ['¿Qué características buscas en tu futura mascota?', 'area', { opt: 1, ph: 'Edad, tamaño, carácter, nivel de energía…' }]
    ]},
    { t: 'Vivienda', d: 'Nos ayuda a saber si el espacio es seguro y adecuado para la mascota.', q: [
      ['Tipo de vivienda', 'choice', { opts: ['Casa', 'Departamento', 'Parcela', 'Otra'] }],
      ['La vivienda es', 'choice', { opts: ['Propia', 'Arrendada', 'De un familiar'] }],
      ['Si arriendas, ¿el contrato o el propietario permiten mascotas?', 'choice', { opts: ['Sí', 'No', 'No lo sé', 'No aplica'] }],
      ['¿Tu vivienda tiene terreno o patio completamente cerrado?', 'choice', { hint: 'Requisito para adoptar un perro: el terreno debe estar cerrado para evitar escapes.', opts: ['Sí, completamente cerrado', 'Parcialmente cerrado', 'No', 'No aplica (adopto un gato)'] }],
      ['¿Las ventanas y balcones tienen malla de protección?', 'choice', { hint: 'Requisito para adoptar un gato: todos nuestros gatos se entregan para vivir exclusivamente dentro de casa (indoor).', opts: ['Sí', 'No, pero la instalaré antes de la entrega', 'No', 'No aplica (adopto un perro)'] }],
      ['¿Dónde dormirá la mascota?', 'choice', { opts: ['Dentro de la casa', 'En un espacio techado fuera de la casa', 'Otro'] }]
    ]},
    { t: 'Hogar y rutina', d: 'Queremos asegurarnos de que toda la familia esté preparada.', q: [
      ['¿Cuántas personas viven en tu hogar?', 'number', { half: 1, ph: 'N.º de personas', min: 1, max: 30 }],
      ['¿Hay niños en el hogar? Indica sus edades', 'text', { half: 1, opt: 1, ph: 'Ej.: 4 y 9 años', hint: 'Nos ayuda a elegir una mascota que se lleve bien con niños pequeños.' }],
      ['¿Todos los integrantes del hogar están de acuerdo con la adopción?', 'choice', { opts: SN }],
      ['¿Alguien del hogar tiene alergia a perros o gatos?', 'choice', { opts: ['Sí', 'No', 'No lo sé'] }],
      ['¿Cuánto tiempo podrás dedicarle durante las primeras semanas de adaptación?', 'choice', { hint: 'Los primeros días son clave, sobre todo para los perros recién llegados.', opts: ['Estaré en casa la mayor parte del día', 'Algunas horas cada día', 'Solo en las noches y fines de semana', 'Muy poco tiempo'] }],
      ['Habitualmente, ¿cuántas horas al día estaría sola la mascota?', 'choice', { opts: ['Menos de 4', 'Entre 4 y 8', 'Más de 8'] }],
      ['¿Tienes otras mascotas actualmente?', 'area', { hint: 'Indica especie, edad, carácter y si están esterilizadas y vacunadas. Si no tienes, escribe «No».', ph: 'Ej.: perrita de 5 años, tranquila, esterilizada y con vacunas al día' }]
    ]},
    { t: 'Experiencia y motivación', d: 'No hay respuestas correctas: nos interesa conocerte.', q: [
      ['¿Has tenido mascotas antes? ¿Qué pasó con ellas?', 'area', { ph: 'Cuéntanos tu experiencia' }],
      ['¿Por qué quieres adoptar una mascota?', 'area', { ph: 'Tu motivación' }],
      ['Durante la adaptación, la mascota puede llorar, ensuciar o no llevarse bien con tus otras mascotas o con los niños. ¿Cómo lo manejarías?', 'area', { ph: 'Describe cómo la acompañarías en esos primeros días' }],
      ['Si te mudas, viajas o cambia tu situación, ¿qué harías con la mascota?', 'area', { ph: 'Describe tu plan' }]
    ]},
    { t: 'Compromisos de tenencia responsable', d: 'Adoptar es un compromiso para toda la vida de la mascota.', q: [
      ['¿Te comprometes a llevarla al veterinario (vacunas, desparasitación y controles)?', 'choice', { opts: SN }],
      ['Si adoptas un perro, ¿te comprometes a sacarlo a pasear regularmente?', 'choice', { opts: ['Sí', 'No', 'No aplica (adopto un gato)'] }],
      ['Si la mascota tiene menos de 2 meses, ¿te comprometes a esterilizarla cuando tenga la edad?', 'choice', { hint: 'Las mascotas mayores de 2 meses se entregan ya esterilizadas. Para las menores, la esterilización posterior es gratuita.', opts: ['Sí', 'No', 'No aplica'] }],
      ['Si adoptas un gato, ¿te comprometes a mantenerlo exclusivamente dentro de casa?', 'choice', { opts: ['Sí', 'No', 'No aplica (adopto un perro)'] }],
      ['¿Aceptas una visita domiciliaria antes de la adopción?', 'choice', { opts: SN }],
      ['¿Aceptas el seguimiento de Los Arrabaleros durante toda la vida de la mascota?', 'choice', { hint: 'Te escribiremos al día siguiente de la adopción, a la semana, cuando corresponda la esterilización o las vacunas y, luego, al menos una vez al año.', opts: SN }],
      ['¿Aceptas firmar el contrato y la ficha de adopción al momento de la entrega?', 'choice', { opts: SN }],
      ['Si en algún momento no pudieras seguir cuidándola, ¿te comprometes a avisarnos en lugar de regalarla o abandonarla?', 'choice', { opts: SN }]
    ]},
    { t: 'Para terminar', d: 'Últimos detalles antes de enviar tu solicitud.', q: [
      ['Información adicional que quieras compartir', 'area', { opt: 1, ph: 'Opcional' }],
      ['Autorizo a Los Arrabaleros a usar mis datos personales solo para evaluar esta solicitud y hacer el seguimiento de la adopción.', 'consent', {}]
    ]}
  ];

  // Función utilitaria para creación rápida de nodos DOM
  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') e.className = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k]; else e.setAttribute(k, attrs[k]);
    });
    if (text != null) e.textContent = text;
    return e;
  }
  var star = '<span class="star" aria-hidden="true"> *</span>';
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  var n = 0, steps = document.getElementById('steps'), host = document.getElementById('sections');
  var inputNames = []; // Mantiene el orden exacto de las 40 columnas hacia Google Sheets
  const API_URL = 'https://script.google.com/macros/s/AKfycbzrkOTRnawpuh5iehLj3eoVH9ZUwJXD0Sx_FApC-wIuGMJmx_j2ixzreZbZ8h_2viwiwA/exec';

  // Renderizado dinámico de secciones y preguntas
  S.forEach(function (sec, si) {
    var num = si + 1;
    var a = el('a', { href: '#sec' + num, html: '<span class="num">' + num + '</span>' + esc(sec.t) });
    steps.appendChild(a);
    var card = el('section', { class: 'card', id: 'sec' + num });
    card.appendChild(el('div', { class: 'sec-head', html: '<span class="num">' + num + '</span><div><h2>' + esc(sec.t) + '</h2><p>' + esc(sec.d) + '</p></div>' }));
    var fields = el('div', { class: 'fields' });
    sec.q.forEach(function (row) {
      n += 1;
      var label = row[0], type = row[1], o = row[2] || {}, id = o.id || ('q' + n), req = !o.opt;
      inputNames.push(id);
      var qhtml = '<span class="n">' + n + '.</span> ' + esc(label) + (req ? star : '');
      var f;
      if (type === 'consent') {
        f = el('div', { class: 'field', id: 'wrap_' + id });
        var lab = el('label', { class: 'consent', for: id });
        var cb = el('input', { type: 'checkbox', id: id, name: id, value: 'Sí, autorizo', required: '' });
        lab.appendChild(cb);
        lab.appendChild(el('span', { html: qhtml }));
        f.appendChild(lab);
      } else if (type === 'choice' || type === 'multi') {
        f = el('fieldset', { class: 'field' + (o.half ? ' half' : ''), id: 'wrap_' + id });
        f.appendChild(el('legend', { class: 'q', html: qhtml }));
        if (o.hint) f.appendChild(el('span', { class: 'hint' }, o.hint));
        var opts = el('div', { class: 'opts' });
        o.opts.forEach(function (t, oi) {
          var oid = id + '_' + oi;
          var l = el('label', { class: 'opt' + (type === 'multi' ? ' box' : ''), for: oid });
          var inp = el('input', { type: type === 'multi' ? 'checkbox' : 'radio', name: id, id: oid, value: t });
          if (req && type === 'choice' && oi === 0) inp.required = true;
          l.appendChild(inp); l.appendChild(document.createTextNode(t));
          opts.appendChild(l);
        });
        f.appendChild(opts);
      } else if (type === 'select') {
        f = el('div', { class: 'field' + (o.half ? ' half' : ''), id: 'wrap_' + id });
        f.appendChild(el('label', { class: 'q', for: id, html: qhtml }));
        if (o.hint) f.appendChild(el('span', { class: 'hint' }, o.hint));
        var sel = el('select', { id: id, name: id });
        sel.appendChild(el('option', { value: '' }, 'Cargando mascotas disponibles...'));
        if (req) sel.required = true;
        f.appendChild(sel);
      } else {
        f = el('div', { class: 'field' + (o.half ? ' half' : ''), id: 'wrap_' + id });
        f.appendChild(el('label', { class: 'q', for: id, html: qhtml }));
        if (o.hint) f.appendChild(el('span', { class: 'hint' }, o.hint));
        var input = type === 'area' ? el('textarea', { id: id, name: id, rows: '3' }) : el('input', { type: type, id: id, name: id });
        if (o.ph) input.setAttribute('placeholder', o.ph);
        if (o.min) input.setAttribute('min', String(o.min));
        if (o.max) input.setAttribute('max', String(o.max));
        if (req) input.required = true;
        f.appendChild(input);
      }
      fields.appendChild(f);
    });
    card.appendChild(fields);
    host.appendChild(card);
  });
  document.getElementById('countChip').textContent = S.length + ' secciones · ' + n + ' preguntas';

  // --- CARGA DINÁMICA DE NOMBRES DE MASCOTAS DISPONIBLES DESDE GOOGLE SHEETS ---
  var catalogoMascotas = [];
  var selectMascota = document.getElementById('mascota_nombre');

  function actualizarOpcionesMascotas(especieElegida) {
    if (!selectMascota || selectMascota.tagName !== 'SELECT') return;
    var valorPrevio = selectMascota.value;
    selectMascota.innerHTML = '';

    // Opción por defecto para quienes aún no tienen un animal específico decidido
    selectMascota.appendChild(el('option', { value: '' }, '— No tengo una específica / Busco recomendación —'));

    var listaFiltrada = catalogoMascotas.filter(function (m) {
      if (!especieElegida) return true;
      return (m.especie || '').toLowerCase() === especieElegida.toLowerCase();
    });

    listaFiltrada.forEach(function (m) {
      var etiqueta = especieElegida ? m.nombre : m.nombre + (m.especie ? ' (' + m.especie + ')' : '');
      var opt = el('option', { value: m.nombre }, etiqueta);
      if (m.nombre === valorPrevio) opt.selected = true;
      selectMascota.appendChild(opt);
    });
  }

  // Consulta GET al backend de Google Apps Script al iniciar el formulario
  fetch(API_URL)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data && data.status === 'success' && Array.isArray(data.mascotas)) {
        catalogoMascotas = data.mascotas;
        var radioMarcado = document.querySelector('input[name="q9"]:checked');
        actualizarOpcionesMascotas(radioMarcado ? radioMarcado.value : '');
      } else {
        throw new Error('Respuesta sin catálogo válido');
      }
    })
    .catch(function () {
      // Fallback: si falla la conexión o el endpoint aún no está publicado, convierte el select en input de texto
      if (selectMascota && selectMascota.parentNode) {
        var fallbackInput = el('input', {
          type: 'text',
          id: 'mascota_nombre',
          name: 'mascota_nombre',
          placeholder: 'Nombre de la mascota (opcional)'
        });
        selectMascota.parentNode.replaceChild(fallbackInput, selectMascota);
      }
    });

  // --- VALIDACIÓN Y FORMATEO DE RUT CHILENO (MÓDULO 11) ---
  function limpiarRut(rut) {
    return rut.replace(/[^0-9kK]/g, '').toUpperCase();
  }

  function formatearRut(rut) {
    var limpio = limpiarRut(rut);
    if (limpio.length <= 1) return limpio;
    var cuerpo = limpio.slice(0, -1);
    var dv = limpio.slice(-1);
    return cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv;
  }

  function validarRutChileno(rut) {
    var limpio = limpiarRut(rut);
    if (limpio.length < 8 || limpio.length > 9) return false;
    var cuerpo = limpio.slice(0, -1);
    var dv = limpio.slice(-1);
    if (!/^\d+$/.test(cuerpo)) return false;

    var suma = 0, multiplo = 2;
    for (var i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }
    var dvEsperado = 11 - (suma % 11);
    var dvCalc = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : String(dvEsperado);
    return dv === dvCalc;
  }

  var rutInput = document.getElementById('rut');
  if (rutInput) {
    rutInput.addEventListener('input', function () {
      var pos = this.selectionStart;
      var lenAntes = this.value.length;
      this.value = formatearRut(this.value);
      var lenDespues = this.value.length;
      this.setCustomValidity('');
      this.classList.remove('input-error');
      if (this.selectionStart != null) {
        this.setSelectionRange(pos + (lenDespues - lenAntes), pos + (lenDespues - lenAntes));
      }
    });
  }

  // --- VALIDACIÓN Y FORMATEO DE TELÉFONO CHILENO ---
  function validarTelefonoChileno(tel) {
    var digitos = tel.replace(/\D/g, '');
    if (digitos.length === 9 && /^[2-9]\d{8}$/.test(digitos)) return true;
    if (digitos.length === 11 && /^56[2-9]\d{8}$/.test(digitos)) return true;
    return false;
  }

  function normalizarTelefono(tel) {
    var digitos = tel.replace(/\D/g, '');
    if (digitos.length === 9) digitos = '56' + digitos;
    if (digitos.length === 11 && digitos.indexOf('56') === 0) {
      return '+' + digitos.slice(0, 2) + ' ' + digitos.slice(2, 3) + ' ' + digitos.slice(3, 7) + ' ' + digitos.slice(7);
    }
    return tel.trim();
  }

  var telInput = document.getElementById('telefono');
  if (telInput) {
    telInput.addEventListener('input', function () {
      this.setCustomValidity('');
      this.classList.remove('input-error');
    });
    telInput.addEventListener('blur', function () {
      if (this.value.trim()) this.value = normalizarTelefono(this.value);
    });
  }

  // --- LÓGICA CONDICIONAL PARA EVITAR RESPUESTAS CONTRADICTORIAS ---
  function configurarPreguntaCondicional(qName, autoValor, debeBloquear, opcionDeshabilitada) {
    var wrap = document.getElementById('wrap_' + qName);
    var radios = document.querySelectorAll('input[name="' + qName + '"]');
    if (!wrap || !radios.length) return;

    if (debeBloquear) {
      wrap.classList.add('auto-locked');
      radios.forEach(function (r) {
        r.checked = (r.value === autoValor);
        r.parentElement.classList.remove('disabled-opt');
      });
    } else {
      wrap.classList.remove('auto-locked');
      radios.forEach(function (r) {
        if (r.value === opcionDeshabilitada) {
          if (r.checked) r.checked = false;
          r.parentElement.classList.add('disabled-opt');
        } else {
          r.parentElement.classList.remove('disabled-opt');
        }
      });
    }
  }

  // 1. Condicional por Especie: Pregunta 9 (q9) -> Perro vs Gato
  var radiosEspecie = document.querySelectorAll('input[name="q9"]');
  radiosEspecie.forEach(function (radio) {
    radio.addEventListener('change', function () {
      var esPerro = (this.value === 'Perro');
      var esGato = (this.value === 'Gato');

      configurarPreguntaCondicional('q16', 'No aplica (adopto un gato)', esGato, 'No aplica (adopto un gato)');
      configurarPreguntaCondicional('q31', 'No aplica (adopto un gato)', esGato, 'No aplica (adopto un gato)');

      configurarPreguntaCondicional('q17', 'No aplica (adopto un perro)', esPerro, 'No aplica (adopto un perro)');
      configurarPreguntaCondicional('q33', 'No aplica (adopto un perro)', esPerro, 'No aplica (adopto un perro)');

      // Filtrar el selector de nombres de mascotas según la especie seleccionada
      actualizarOpcionesMascotas(this.value);
    });
  });

  // 2. Condicional por Tenencia de Vivienda: Pregunta 14 (q14) -> Propia / Arrendada / De un familiar
  var radiosTenencia = document.querySelectorAll('input[name="q14"]');
  radiosTenencia.forEach(function (radio) {
    radio.addEventListener('change', function () {
      var esArrendada = (this.value === 'Arrendada');
      configurarPreguntaCondicional('q15', 'No aplica', !esArrendada, 'No aplica');
    });
  });

  // --- MANEJO DEL ENVÍO DEL FORMULARIO ---
  var form = document.getElementById('adoptForm'), err = document.getElementById('formError'), submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    err.hidden = true;

    // Validar RUT antes de evaluar validez general
    if (rutInput) {
      if (!validarRutChileno(rutInput.value)) {
        rutInput.setCustomValidity('Por favor, ingresa un RUT chileno válido (ej.: 12.345.678-9).');
        rutInput.classList.add('input-error');
      } else {
        rutInput.setCustomValidity('');
        rutInput.classList.remove('input-error');
      }
    }

    // Validar Teléfono antes de evaluar validez general
    if (telInput) {
      if (!validarTelefonoChileno(telInput.value)) {
        telInput.setCustomValidity('Ingresa un teléfono chileno válido de 9 dígitos (ej.: +56 9 1234 5678).');
        telInput.classList.add('input-error');
      } else {
        telInput.value = normalizarTelefono(telInput.value);
        telInput.setCustomValidity('');
        telInput.classList.remove('input-error');
      }
    }

    // Comprobar si todo el formulario es válido
    if (!form.checkValidity()) {
      var firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) {
        err.textContent = firstInvalid.validationMessage || 'Faltan respuestas obligatorias. Revisa la pregunta marcada y vuelve a enviar.';
        err.hidden = false;
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Prevención de envíos múltiples (UI Loading State)
    var originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando solicitud...';
    submitBtn.style.opacity = '0.7';

    // Recolectar datos en un arreglo respetando el orden exacto de las 40 columnas
    var formData = new FormData(form);
    var arrayRespuestas = inputNames.map(function(name) {
      var vals = formData.getAll(name);
      var valor = vals.length > 0 ? vals.join(', ') : '';
      valor = valor.trim();
      
      // Forzar formato de texto plano en Google Sheets si empieza con "+", "=", "-" o "@"
      if (/^[+=@-]/.test(valor)) {
        valor = "'" + valor;
      }
      
      return valor;
    });

    var payload = { respuestas: arrayRespuestas };

    // ENVÍO REAL A LA BASE DE DATOS (Google Sheets)
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(function(res) { 
      return res.text();
    })
    .then(function(text) {
      var data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        throw new Error('Error de comunicación con el servidor. Intenta nuevamente en unos segundos.');
      }

      if (data && data.status === 'success') {
        var name = (document.getElementById('nombre').value || '').trim().split(/\s+/)[0];
        document.getElementById('doneMsg').textContent = (name ? 'Gracias, ' + name + '. ' : 'Gracias. ') + 'Te contactaremos por WhatsApp o correo, normalmente dentro de 1 a 2 días.';
        document.getElementById('formView').style.display = 'none';
        document.getElementById('doneView').hidden = false;
        window.scrollTo(0, 0);
      } else {
        throw new Error((data && data.message) || 'No se pudo registrar la postulación.');
      }
    })
    .catch(function(error) {
      err.textContent = error.message;
      err.hidden = false;
    })
    .finally(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      submitBtn.style.opacity = '1';
    });
  });

  document.getElementById('backBtn').addEventListener('click', function () {
    form.reset();
    // Restaurar estados condicionales visuales y catálogo completo al reiniciar el formulario
    ['q15', 'q16', 'q17', 'q31', 'q33'].forEach(function (qName) {
      var wrap = document.getElementById('wrap_' + qName);
      if (wrap) wrap.classList.remove('auto-locked');
      document.querySelectorAll('input[name="' + qName + '"]').forEach(function (r) {
        r.parentElement.classList.remove('disabled-opt');
      });
    });
    actualizarOpcionesMascotas('');
    document.getElementById('doneView').hidden = true;
    document.getElementById('formView').style.display = 'flex';
    window.scrollTo(0, 0);
  });
})();