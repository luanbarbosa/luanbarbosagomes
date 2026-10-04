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
			"routines.title": "Routines",
			"routines.body": "Organize your exercises as you see fit.",
			"routines.li1": "Unlimited routines",
			"routines.li2": "Unlimited exercises",
			"routines.li3": "Create custom exercises",
			"play.title": "Workout player",
			"play.body": "Use the app while you work out.",
			"play.li1": "Adjust your workout on the fly",
			"play.li2": "Get a workout report at the end",
			"history.title": "History",
			"history.body": "Look back at every workout you've done.",
			"history.li1": "Browse your past workouts",
			"history.li2": "See your frequency per month",
			"history.li3": "Add ad-hoc workouts",
			"stats.title": "Statistics",
			"stats.body": "Get a full overview of your progress.",
			"stats.li1": "Workout frequency",
			"stats.li2": "Frequency by exercise type",
			"stats.li3": "Progress by exercise type",
			"stats.li4": "Progress for each exercise",
			"measurements.title": "Measurements",
			"measurements.body": "Track your body weight.",
			"measurements.li1": "Log your weight",
			"measurements.li2": "Follow your weight progress",
			"assistant.title": "Assistant",
			"assistant.body": "A semi-intelligent assistant (not AI) to help you reach your goals.",
			"assistant.li1": "Get routine recommendations",
			"assistant.li2": "Get status messages in different moods: encouraging, neutral or sassy",
			"assistant.li3": "Get notified about \"stale\" exercises",
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
			"routines.title": "Rotinas",
			"routines.body": "Monte seus treinos do jeito que você quiser.",
			"routines.li1": "Quantas rotinas quiser",
			"routines.li2": "Quantos exercícios quiser",
			"routines.li3": "Crie seus próprios exercícios se preferir",
			"play.title": "Modo treino",
			"play.body": "Use o app durante o treino.",
			"play.li1": "Ajuste o treino ao vivo",
			"play.li2": "Receba um relatório no fim do treino",
			"history.title": "Histórico",
			"history.body": "Reveja todos os treinos que você já fez.",
			"history.li1": "Consulte seus treinos anteriores",
			"history.li2": "Veja sua frequência por mês",
			"history.li3": "Registre treinos avulsos",
			"stats.title": "Estatísticas",
			"stats.body": "Veja sua evolução de ponta a ponta.",
			"stats.li1": "Frequência de treino",
			"stats.li2": "Frequência por grupo muscular",
			"stats.li3": "Evolução por grupo muscular",
			"stats.li4": "Evolução de cada exercício",
			"measurements.title": "Medidas",
			"measurements.body": "Acompanhe seu peso corporal.",
			"measurements.li1": "Registre seu peso",
			"measurements.li2": "Veja sua evolução",
			"assistant.title": "Assistente",
			"assistant.body": "Um assistente (não é IA) pra te ajudar a bater suas metas.",
			"assistant.li1": "Sugestões de rotinas",
			"assistant.li2": "Mensagens de status com humor (motivadora, neutra ou debochada)",
			"assistant.li3": "Aviso quando um exercício estiver estagnado",
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

		// localized screenshots: assets/images (en) / assets/images-pt (pt)
		var dir = lang === "pt" ? "assets/images-pt/" : "assets/images/";
		document.querySelectorAll("img[src*='assets/images']").forEach(function (img) {
			var file = img.getAttribute("src").split("/").pop();
			img.setAttribute("src", dir + file);
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
