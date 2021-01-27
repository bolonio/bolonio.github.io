---
lang: es
title: ¿Qué cambios trae el primer borrador de las WCAG 3.0?
date: 2021-01-27
description: El pasado 21 de enero de 2021 se publicó el primer borrador de las W3C Accessibility Guidelines (WCAG) 3.0, y viene cargadito de cambios con respecto a la versión actual.
image: intro.png
imageAlt: una imagen decorativa con la frase "¿Qué cambios trae el primer borrador de las WCAG 3.0?"
tags:
  - accesibilidad
  - desarrollo
  - WCAG
---

El pasado 21 de enero de 2021 se publicó el primer borrador de las [W3C Accessibility Guidelines (WCAG) 3.0](https://www.w3.org/TR/wcag-3.0/), y viene cargadito de cambios con respecto a la versión actual. En este artículo voy a intentar contarte brevemente los cambios más significativos en esta versión.

# Nombre y Estructura

El primer cambio que podemos observar es en el nombre. La versión actual, WCAG 2.X, se denomina "Web Content Accessibility Guidelines",
pero con la llegada de W3CG el nombre cambiará a **"W3C Accessiblity Guidelines"**. El motivo principal es romper con la limitación de analizar solo el contenido ("content" en inglés), para poner el centro en las guías de accesibilidad. Además se mantendrá WCAG como acrónimo y seguirá siendo garantía de accesibilidad.

El segundo gran cambio tiene lugar en la estructura del documento. Se pasa a una estructura simplificada basada en guías, resultados, y métodos.

## Guías

La nueva versión del borrador define las guías ("Guidelines" en inglés), como soluciones para los problemas de accesibilidad.

## Resultados

La nueva versión del borrador define los resultados ("Outcomes" en inglés), como el resultado deseado al reducir los problemas de accesibilidad.

## Métodos

La nueva versión del borrador define los métodos ("Methods" en inglés), como formas y tests detallados para evaluar lo bien que un proyecto cumple con los resultados.

# Modelo de conformidad

Cuando hablamos de un conformidad, nos referimos a que un sitio web cumple con las guías de accesibilidad establecidas en las WCAG.
En la versión actual, ese modelo de conformidad se basa en decisiones puramente binarias (si/no), acompañado con diferentes niveles: **A, AA, y AAAA**.
Dependiendo del criterio evaluado, se sitúa dentro del nivel especificado por dichos criterios. Para conseguir uno de los niveles, se deben cumplir todos los criterios de ese nivel.

La nueva versión del borrador define tres nuevos niveles: **bronce, plata, y oro**. Estos tres niveles no se corresponden completamente con los anteriores niveles, pero en la práctica serán muy similares, aunque alguno de los nuevos niveles necesitarán análisis diferentes. Con estos tres nuevos niveles se consigue una mayor flexibilidad en la evaluación de un sitio web, evitando esas decisiones binarias, y se obtiene una evaluación más precisa y correcta.

# Tests

La nueva versión del borrador incluye dos nuevos tipos de tests: atómicos y holísticos.

## Tests Atómicos

Los tests atómicos son tests simples que permitirán conseguir el nivel bronce. Estos tests comprueban normalmente la conformidad del código del sitio web, y son muy similares a lo que conocemos con auditoría de accesibilidad.

### Nuevo criterio de evaluación

Para estos nuevos tests atómicos, la nueva versión del borrador establece nuevos criterios de evaluación basados en ciertos valores numéricos (de 0 a 4) y no solo basados en decisiones binarias (si/no). Habrá tests basados en decisiones binarias y otros basados en decisiones más complejas. Pero todos tendrán una guía para el nuevo criterio de evaluación.

Los resultados de las pruebas atómicas se agregan a través de las vistas y se utilizan junto con el número de errores críticos para asignar una calificación de adjetivo al resultado. Luego, los evaluadores utilizarán la guía proporcionada en el resultado junto con un juicio razonable del contexto en el que ocurren los errores para asignar una puntuación de accesibilidad del resultado.

La tabla de los nuevos criterios es:

- Muy pobre (0): Cualquier error crítico o menos del 50% de los tests relacionados pasados satisfactoriamente.
- Pobre (1): Ningún error crítico, aproximadamente del 50% al 79% de los tests relacionados pasados satisfactoriamente.
- Justo (2): Ningún error crítico, aproximadamente del 80% al 89% de los tests relacionados pasados satisfactoriamente.
- Bueno (3): Ningún error crítico, aproximadamente del 90% al 98% de los tests relacionados pasados satisfactoriamente.
- Excelente (4): Ningún error crítico, aproximadamente del 99% al 100% de los tests relacionados pasados satisfactoriamente.

Una vez evaluados todos los resultados, se necesitará un resultado mínimo global de 3,5 sobre 4, y un resultado mínimo de 3,5 sobre 4 en cada una de las categorías funcionales para conseguir el nivel bronce.

## Tests Holísticos

Los tests holísticos son tests de usabilidad y tests manuales con hardware y software usado por personas con discapacidad, especialmente tecnologías de asistencia. Estos tests permitirán conseguir los niveles plata y oro. Hay que tener en cuenta de que puede darse el caso de que algún contenido de un sitio web consiga el nivel bronce al pasar los tests atómicos, pero ese mismo contenido no sea usable para personas con discapacidad. En estos casos los tests holísticos son especialmente útiles.

# Conclusión

Como hemos visto, la nueva versión del borrador viene cargadito de cambios con respecto a la versión actual. Se espera que sea efectivo en mínimo en 2023, así que muy seguramente este borrador sufrirá cambios durante estos dos años. La razón de este cambio ha sido el hecho de darse cuenta de que todos debemos crear sitios web mucho más accesibles de lo que son ahora, y que la versión actual, WCAG 2.X, no es todo lo precisa y correcta que debería ser. Hay que tomarse este borrador como lo que es, un borrador, y no una versión final, y como he dicho, sufrirá cambios.

## Otros análisis del primer borrador de las WCAG 3.0

- [WCAG 3.0, primer borrador con cambios muy importantes (Vicent Sanchis)](https://vicentsanchis.com/wcag-3-0-primer-borrador-con-cambios-muy-importantes/#en_el_nombre)
- [WCAG 3.0 - Novedades del último borrador (Olga Carreras)](https://olgacarreras.blogspot.com/2021/01/wcag-30-novedades-del-ultimo-borrador.html#w3_4)
- [What to Expect From The First Public Working Draft of WCAG 3.0 (Deque) - En Inglés](https://www.deque.com/blog/first-public-working-draft-wcag-3/)
