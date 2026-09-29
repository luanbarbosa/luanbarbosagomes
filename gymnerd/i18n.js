(function () {
	var strings = {
		en: {
			"meta.description": "GymNerd is a workout tracker for people who like their numbers.",
			"hero.caption": "Workout tracker",
			"hero.title": "If it doesn't cost us, <em>it's free for you.</em>",
			"hero.body": "GymNerd is a workout tracker. Log your sets, reps and weights, then see what is actually improving. We only charge for what costs us money to run. Everything else is free.",
			"cta.download": "Download",
			"hero.scroll": "Scroll down",
			"shot.screenshot": "Screenshot",
			"shot.image": "Image",
			"shot.log": "Workout log",
			"shot.stats": "Statistics",
			"shot.library": "Exercise library",
			"shot.plan": "Weekly plan",
			"log.title": "Log a set in a few taps",
			"log.body": "Pick the exercise, enter weight and reps, move on. The last session is right there so you know what to beat.",
			"log.li1": "<b>Previous numbers</b> shown next to every set",
			"log.li2": "<b>Rest days</b> count as part of the plan, not a gap",
			"log.li3": "<b>Edit anything</b> after the fact",
			"progress.title": "Progress you can read",
			"progress.body": "Volume, records and trends per exercise. Green when you are going up, red when you are not. Simple enough to check between sets.",
			"stat.volume": "Volume",
			"stat.records": "Records",
			"stat.streak": "Streak",
			"stat.streakValue": "5 wk",
			"exercises.title": "An exercise library that stays out of the way",
			"exercises.body": "Search by name or muscle group. Add your own when the one you need is missing.",
			"plan.title": "Plan the week",
			"plan.body": "Lay out your training days ahead of time and see at a glance what is done, what is next and where you are resting.",
			"closing.title": "Free unless it costs us",
			"closing.body": "Core tracking stays free. We only charge for what costs us money to run.",
			"footer.privacy": "Privacy policy",
			"lang.label": "Language"
		},
		pt: {
			"meta.description": "GymNerd é um app de treino para quem gosta de números.",
			"hero.caption": "App de treino",
			"hero.title": "Se não custa pra gente, <em>é grátis pra você.</em>",
			"hero.body": "GymNerd é um app de treino. Registre suas séries, repetições e cargas e veja o que está realmente evoluindo. Só cobramos pelo que nos custa dinheiro para manter. O resto é grátis.",
			"cta.download": "Baixar",
			"hero.scroll": "Rolar para baixo",
			"shot.screenshot": "Captura de tela",
			"shot.image": "Imagem",
			"shot.log": "Registro de treino",
			"shot.stats": "Estatísticas",
			"shot.library": "Biblioteca de exercícios",
			"shot.plan": "Plano semanal",
			"log.title": "Registre uma série em poucos toques",
			"log.body": "Escolha o exercício, informe carga e repetições e siga em frente. O último treino está ali para você saber o que superar.",
			"log.li1": "<b>Números anteriores</b> ao lado de cada série",
			"log.li2": "<b>Dias de descanso</b> fazem parte do plano, não são um buraco",
			"log.li3": "<b>Edite tudo</b> depois de registrar",
			"progress.title": "Progresso que dá pra ler",
			"progress.body": "Volume, recordes e tendências por exercício. Verde quando você está evoluindo, vermelho quando não está. Simples o bastante para conferir entre as séries.",
			"stat.volume": "Volume",
			"stat.records": "Recordes",
			"stat.streak": "Sequência",
			"stat.streakValue": "5 sem",
			"exercises.title": "Uma biblioteca de exercícios que não atrapalha",
			"exercises.body": "Busque por nome ou grupo muscular. Adicione o seu quando o que você precisa não estiver lá.",
			"plan.title": "Planeje a semana",
			"plan.body": "Monte seus dias de treino com antecedência e veja de relance o que já foi feito, o que vem a seguir e onde você descansa.",
			"closing.title": "Grátis, a menos que nos custe",
			"closing.body": "O registro básico continua grátis. Só cobramos pelo que nos custa dinheiro para manter.",
			"footer.privacy": "Política de privacidade",
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
	}

	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".lang button").forEach(function (b) {
			b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
		});
		apply(initial());
	});
})();
