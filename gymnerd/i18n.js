(function () {
	var strings = {
		en: {
			"meta.description": "GymNerd is a workout tracker for people who like their numbers.",
			"hero.caption": "Workout tracker",
			"hero.title": "Tired of overly monetized gym apps?",
			"hero.body": "So were we... Our app lives by one rule:",
			"hero.mantra": "If it doesn't cost us, it will be <em>free for you</em>!",
			"cta.download": "Download",
			"hero.scroll": "Scroll down",
			"shot.screenshot": "Screenshot",
			"shot.image": "Image",
			"shot.log": "Workout log",
			"shot.stats": "Statistics",
			"shot.library": "Exercise library",
			"shot.plan": "Weekly plan",
			"stat.volume": "Volume",
			"stat.records": "Records",
			"stat.streak": "Streak",
			"stat.streakValue": "5 wk",
			"closing.title": "Free unless it costs us",
			"closing.body": "Core tracking stays free. We only charge for what costs us money to run.",
			"footer.privacy": "Privacy policy",
			"phone.day": "Push day",
			"phone.week": "Week 5",
			"log.set": "Set",
			"log.prev": "Previous",
			"log.reps": "Reps",
			"ex.bench": "Bench press",
			"ex.incline": "Incline dumbbell press",
			"ex.squat": "Back squat",
			"ex.deadlift": "Deadlift",
			"ex.row": "Barbell row",
			"ex.ohp": "Overhead press",
			"ex.curl": "Dumbbell curl",
			"ex.pullup": "Pull-up",
			"ex.plank": "Plank",
			"ex.legpress": "Leg press",
			"ex.dip": "Triceps dip",
			"phone.sets": "3 sets",
			"phone.finish": "Finish workout",
			"toast.pr": "New record",
			"progress.week": "Weekly volume",
			"progress.up": "Up on last week",
			"progress.down": "Down on last week",
			"lib.search": "Search exercises",
			"lib.all": "All",
			"lib.chest": "Chest",
			"lib.back": "Back",
			"lib.legs": "Legs",
			"lib.shoulders": "Shoulders",
			"lib.arms": "Arms",
			"lib.core": "Core",
			"lib.add": "Add \"{q}\" as your own exercise",
			"plan.mon": "Mon",
			"plan.tue": "Tue",
			"plan.wed": "Wed",
			"plan.thu": "Thu",
			"plan.fri": "Fri",
			"plan.sat": "Sat",
			"plan.sun": "Sun",
			"plan.push": "Push",
			"plan.pull": "Pull",
			"plan.legs": "Legs",
			"plan.upper": "Upper",
			"plan.rest": "Rest",
			"plan.done": "Done",
			"plan.next": "Next",
			"plan.todo": "Planned",
			"routines.title": "Routines title",
			"routines.body": "Placeholder text for the routines section. Replace with the real description.",
			"routines.li1": "Placeholder point one",
			"routines.li2": "Placeholder point two",
			"routines.li3": "Placeholder point three",
			"play.title": "Play title",
			"play.body": "Placeholder text for the play section. Replace with the real description.",
			"play.li1": "Placeholder point one",
			"play.li2": "Placeholder point two",
			"play.li3": "Placeholder point three",
			"stats.title": "Stats title",
			"stats.body": "Placeholder text for the stats section. Replace with the real description.",
			"stats.li1": "Placeholder point one",
			"stats.li2": "Placeholder point two",
			"stats.li3": "Placeholder point three",
			"measurements.title": "Measurements title",
			"measurements.body": "Placeholder text for the measurements section. Replace with the real description.",
			"measurements.li1": "Placeholder point one",
			"measurements.li2": "Placeholder point two",
			"measurements.li3": "Placeholder point three",
			"assistant.title": "Assistant title",
			"assistant.body": "Placeholder text for the assistant section. Replace with the real description.",
			"assistant.li1": "Placeholder point one",
			"assistant.li2": "Placeholder point two",
			"assistant.li3": "Placeholder point three",
			"lang.label": "Language"
		},
		pt: {
			"meta.description": "GymNerd é um app de treino para quem gosta de números.",
			"hero.caption": "App de treino",
			"hero.title": "Cansado de app que cobra por tudo?",
			"hero.body": "Nós também... No nosso app a regra é uma só:",
			"hero.mantra": "Se não custa pra gente, é <em>grátis pra você</em>!",
			"cta.download": "Baixar",
			"hero.scroll": "Rolar para baixo",
			"shot.screenshot": "Captura de tela",
			"shot.image": "Imagem",
			"shot.log": "Registro de treino",
			"shot.stats": "Estatísticas",
			"shot.library": "Biblioteca de exercícios",
			"shot.plan": "Plano semanal",
			"stat.volume": "Volume",
			"stat.records": "Recordes",
			"stat.streak": "Sequência",
			"stat.streakValue": "5 sem",
			"closing.title": "Grátis, a menos que nos custe",
			"closing.body": "O registro básico continua grátis. Só cobramos pelo que nos custa dinheiro para manter.",
			"footer.privacy": "Política de privacidade",
			"phone.day": "Dia de push",
			"phone.week": "Semana 5",
			"log.set": "Série",
			"log.prev": "Anterior",
			"log.reps": "Reps",
			"ex.bench": "Supino reto",
			"ex.incline": "Supino inclinado com halteres",
			"ex.squat": "Agachamento livre",
			"ex.deadlift": "Levantamento terra",
			"ex.row": "Remada curvada",
			"ex.ohp": "Desenvolvimento militar",
			"ex.curl": "Rosca direta com halteres",
			"ex.pullup": "Barra fixa",
			"ex.plank": "Prancha",
			"ex.legpress": "Leg press",
			"ex.dip": "Mergulho de tríceps",
			"phone.sets": "3 séries",
			"phone.finish": "Finalizar treino",
			"toast.pr": "Novo recorde",
			"progress.week": "Volume semanal",
			"progress.up": "Acima da semana anterior",
			"progress.down": "Abaixo da semana anterior",
			"lib.search": "Buscar exercícios",
			"lib.all": "Todos",
			"lib.chest": "Peito",
			"lib.back": "Costas",
			"lib.legs": "Pernas",
			"lib.shoulders": "Ombros",
			"lib.arms": "Braços",
			"lib.core": "Core",
			"lib.add": "Adicionar \"{q}\" como exercício seu",
			"plan.mon": "Seg",
			"plan.tue": "Ter",
			"plan.wed": "Qua",
			"plan.thu": "Qui",
			"plan.fri": "Sex",
			"plan.sat": "Sáb",
			"plan.sun": "Dom",
			"plan.push": "Push",
			"plan.pull": "Pull",
			"plan.legs": "Pernas",
			"plan.upper": "Superior",
			"plan.rest": "Descanso",
			"plan.done": "Feito",
			"plan.next": "Próximo",
			"plan.todo": "Planejado",
			"routines.title": "Título de routines",
			"routines.body": "Texto provisório da seção de routines. Substitua pela descrição real.",
			"routines.li1": "Ponto provisório 1",
			"routines.li2": "Ponto provisório 2",
			"routines.li3": "Ponto provisório 3",
			"play.title": "Título de play",
			"play.body": "Texto provisório da seção de play. Substitua pela descrição real.",
			"play.li1": "Ponto provisório 1",
			"play.li2": "Ponto provisório 2",
			"play.li3": "Ponto provisório 3",
			"stats.title": "Título de stats",
			"stats.body": "Texto provisório da seção de stats. Substitua pela descrição real.",
			"stats.li1": "Ponto provisório 1",
			"stats.li2": "Ponto provisório 2",
			"stats.li3": "Ponto provisório 3",
			"measurements.title": "Título de measurements",
			"measurements.body": "Texto provisório da seção de measurements. Substitua pela descrição real.",
			"measurements.li1": "Ponto provisório 1",
			"measurements.li2": "Ponto provisório 2",
			"measurements.li3": "Ponto provisório 3",
			"assistant.title": "Título de assistant",
			"assistant.body": "Texto provisório da seção de assistant. Substitua pela descrição real.",
			"assistant.li1": "Ponto provisório 1",
			"assistant.li2": "Ponto provisório 2",
			"assistant.li3": "Ponto provisório 3",
			"lang.label": "Idioma"
		}
	};

	var supported = ["en", "pt"];

	function initial() {
		try {
			var saved = localStorage.getItem("gymnerd-lang");
			if (supported.indexOf(saved) !== -1) return saved;
		} catch (e) {}
		var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
		return supported.indexOf(nav) !== -1 ? nav : "en";
	}

	function apply(lang) {
		var dict = strings[lang];
		document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var v = dict[el.getAttribute("data-i18n")];
			if (v !== undefined) el.innerHTML = v;
		});

		document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
			var v = dict[el.getAttribute("data-i18n-placeholder")];
			if (v !== undefined) el.setAttribute("placeholder", v);
		});

		document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
			var v = dict[el.getAttribute("data-i18n-aria")];
			if (v !== undefined) el.setAttribute("aria-label", v);
		});

		// placeholder boxes: "<label><br /><detail>"
		document.querySelectorAll("[data-shot]").forEach(function (el) {
			var parts = el.getAttribute("data-shot").split("|");
			var label = dict[parts[0]];
			var detail = parts[1].charAt(0) === "@" ? dict[parts[1].slice(1)] : parts[1];
			el.innerHTML = label + "<br />" + detail;
		});

		var desc = document.querySelector('meta[name="description"]');
		if (desc) desc.setAttribute("content", dict["meta.description"]);

		var picker = document.querySelector(".lang");
		if (picker) picker.setAttribute("aria-label", dict["lang.label"]);
		document.querySelectorAll(".lang button").forEach(function (b) {
			b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
		});

		try { localStorage.setItem("gymnerd-lang", lang); } catch (e) {}

		window.gymnerdT = function (key) { return dict[key]; };
		document.dispatchEvent(new CustomEvent("gymnerd:lang", { detail: lang }));
	}

	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".lang button").forEach(function (b) {
			b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
		});
		apply(initial());
	});
})();
