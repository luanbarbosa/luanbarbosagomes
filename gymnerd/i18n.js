(function () {
	var strings = {
		en: {
			"meta.description": "GymNerd is a workout tracker for people who like their numbers.",
			"hero.caption": "Workout tracker",
			"hero.title": "Tired of overly monetized gym apps?",
			"hero.body": "So were we... The <b>GymNerd</b> app follows the mantra <em>\"If it doesn't cost us, it will be free for you!\"</em>",
			"cta.download": "Download",
			"hero.scroll": "Scroll down",
			"shot.screenshot": "Screenshot",
			"shot.image": "Image",
			"shot.log": "Workout log",
			"shot.stats": "Statistics",
			"shot.library": "Exercise library",
			"shot.plan": "Weekly plan",
			"log.title": "Log workouts",
			"log.body": "Pick the exercise, enter weight and reps, move on. The last session is right there so you know what to beat.",
			"log.li1": "Previous numbers next to every set",
			"log.li2": "Rest days as part of the plan",
			"log.li3": "Edit anything afterward",
			"progress.title": "Measure progress",
			"progress.body": "Volume, records and trends per exercise. Green when you are going up, red when you are not. Simple enough to check between sets.",
			"stat.volume": "Volume",
			"stat.records": "Records",
			"stat.streak": "Streak",
			"stat.streakValue": "5 wk",
			"exercises.title": "Find exercises",
			"exercises.body": "Search by name or muscle group. Add your own when the one you need is missing.",
			"plan.title": "Plan your week",
			"plan.body": "Lay out your training days ahead of time and see at a glance what is done, what is next and where you are resting.",
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
			"log.li4": "Few taps per set",
			"progress.li1": "Volume per exercise",
			"progress.li2": "Personal records",
			"progress.li3": "Weekly trends, green up and red down",
			"progress.li4": "Workout streaks",
			"exercises.li1": "Search by name",
			"exercises.li2": "Filter by muscle group",
			"exercises.li3": "Create your own exercises",
			"plan.li1": "Plan training days ahead",
			"plan.li2": "See what is done and what is next",
			"plan.li3": "Rest days included",
			"lang.label": "Language"
		},
		pt: {
			"meta.description": "GymNerd é um app de treino para quem gosta de números.",
			"hero.caption": "App de treino",
			"hero.title": "Cansado de app que cobra por tudo?",
			"hero.body": "Nós também... No <b>GymNerd</b> o lema é: <em>\"Se não custa pra gente, é grátis pra você!\"</em>",
			"cta.download": "Baixar",
			"hero.scroll": "Rolar para baixo",
			"shot.screenshot": "Captura de tela",
			"shot.image": "Imagem",
			"shot.log": "Registro de treino",
			"shot.stats": "Estatísticas",
			"shot.library": "Biblioteca de exercícios",
			"shot.plan": "Plano semanal",
			"log.title": "Registre treinos",
			"log.body": "Escolha o exercício, informe carga e repetições e siga em frente. O último treino está ali para você saber o que superar.",
			"log.li1": "Números anteriores ao lado de cada série",
			"log.li2": "Dias de descanso no plano",
			"log.li3": "Edite tudo depois",
			"progress.title": "Meça seu progresso",
			"progress.body": "Volume, recordes e tendências por exercício. Verde quando você está evoluindo, vermelho quando não está. Simples o bastante para conferir entre as séries.",
			"stat.volume": "Volume",
			"stat.records": "Recordes",
			"stat.streak": "Sequência",
			"stat.streakValue": "5 sem",
			"exercises.title": "Encontre exercícios",
			"exercises.body": "Busque por nome ou grupo muscular. Adicione o seu quando o que você precisa não estiver lá.",
			"plan.title": "Planeje sua semana",
			"plan.body": "Monte seus dias de treino com antecedência e veja de relance o que já foi feito, o que vem a seguir e onde você descansa.",
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
			"log.li4": "Poucos toques por série",
			"progress.li1": "Volume por exercício",
			"progress.li2": "Recordes pessoais",
			"progress.li3": "Tendências semanais, verde sobe e vermelho desce",
			"progress.li4": "Sequências de treino",
			"exercises.li1": "Busca por nome",
			"exercises.li2": "Filtro por grupo muscular",
			"exercises.li3": "Crie seus próprios exercícios",
			"plan.li1": "Planeje os dias de treino",
			"plan.li2": "Veja o que foi feito e o que vem a seguir",
			"plan.li3": "Dias de descanso incluídos",
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
