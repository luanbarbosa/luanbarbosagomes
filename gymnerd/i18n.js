(function () {
	var strings = {
		en: {
			"meta.description": "GymNerd is a workout tracker for people who like their numbers.",
			"hero.title": "Tired of overly monetized gym apps?",
			"hero.body": "Same here... Our app lives by one rule:",
			"hero.mantra": "If it doesn't cost us, it will be <em>free for you</em>!",
			"hero.scroll": "Scroll down",
			"footer.privacy": "Privacy policy",
			"routines.title": "Routines",
			"routines.body": "Organize your exercises as you see fit.",
			"routines.li1": "Unlimited routines",
			"routines.li2": "Unlimited exercises",
			"routines.li3": "Create custom exercises",
			"play.title": "Workout mode",
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
			"stats.li2": "Frequency by muscle group",
			"stats.li3": "Progress by muscle group",
			"stats.li4": "Progress for each exercise",
			"measurements.title": "Body weight",
			"measurements.body": "Keep track of it over time.",
			"measurements.li1": "Log your weight",
			"measurements.li2": "Follow your weight progress",
			"assistant.title": "Assistant",
			"assistant.body": "A semi-intelligent assistant (not AI) to help you reach your goals.",
			"assistant.li1": "Get routine recommendations",
			"assistant.li2": "Get status messages in different moods: encouraging, neutral or sassy",
			"assistant.li3": "Get notified about \"stale\" exercises",
			"alt.routines1": "Routines list screen",
			"alt.routines2": "Routine editing screen",
			"alt.player1": "Workout player screen with the current exercise",
			"alt.player2": "Workout player screen with the set log",
			"alt.history": "Workout history screen",
			"alt.historyW1": "Workout history widget, first variant",
			"alt.historyW2": "Workout history widget, second variant",
			"alt.stats": "Statistics screen",
			"alt.statsW1": "Progress per muscle group",
			"alt.statsW2": "Exercise weight progression chart",
			"alt.measure": "Body weight history screen",
			"alt.measureW1": "Weight progress chart",
			"alt.measureW2": "Log weight with a scrolling ruler",
			"alt.assistant": "Assistant screen with a recommended routine",
			"alt.assistantW1": "Mascot motivating you to set a new record",
			"alt.assistantW2": "Mascot telling you that you can do better",
			"alt.home": "GymNerd home screen",
			"alt.icon": "GymNerd app icon",
			"alt.play": "Get it on Google Play",
			"alt.appstore": "Download on the App Store",
			"badge.soon": "Soon",
			"viewer.label": "Image viewer",
			"viewer.close": "Close",
			"viewer.prev": "Previous image",
			"viewer.next": "Next image",
			"lang.label": "Language"
		},
		pt: {
			"meta.description": "GymNerd é um app de treino para quem gosta de números.",
			"hero.title": "Cansado de app que cobra por tudo?",
			"hero.body": "Nós também... No nosso app a regra é uma só:",
			"hero.mantra": "Se não custa pra gente, é <em>grátis pra você</em>!",
			"hero.scroll": "Rolar para baixo",
			"footer.privacy": "Política de privacidade",
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
			"measurements.title": "Peso corporal",
			"measurements.body": "Acompanhe ao longo do tempo.",
			"measurements.li1": "Registre seu peso",
			"measurements.li2": "Veja sua evolução",
			"assistant.title": "Assistente",
			"assistant.body": "Um assistente semi-inteligente (não é IA) pra te ajudar a bater suas metas.",
			"assistant.li1": "Sugestões de rotinas",
			"assistant.li2": "Mensagens de status com humor (motivadora, neutra ou debochada)",
			"assistant.li3": "Aviso quando um exercício estiver estagnado",
			"alt.routines1": "Tela com a lista de rotinas",
			"alt.routines2": "Tela de edição de rotina",
			"alt.player1": "Tela do modo treino com o exercício atual",
			"alt.player2": "Tela do modo treino com o registro das séries",
			"alt.history": "Tela de histórico de treinos",
			"alt.historyW1": "Widget de histórico de treinos, primeira variação",
			"alt.historyW2": "Widget de histórico de treinos, segunda variação",
			"alt.stats": "Tela de estatísticas",
			"alt.statsW1": "Evolução por grupo muscular",
			"alt.statsW2": "Gráfico de evolução de carga do exercício",
			"alt.measure": "Tela de histórico de peso corporal",
			"alt.measureW1": "Gráfico de evolução do peso",
			"alt.measureW2": "Registro de peso com régua deslizante",
			"alt.assistant": "Tela do assistente com uma rotina recomendada",
			"alt.assistantW1": "Mascote te motivando a bater um novo recorde",
			"alt.assistantW2": "Mascote dizendo que você pode fazer melhor",
			"alt.home": "Tela inicial do GymNerd",
			"alt.icon": "Ícone do app GymNerd",
			"alt.play": "Disponível no Google Play",
			"alt.appstore": "Baixe na App Store",
			"badge.soon": "Em breve",
			"viewer.label": "Visualizador de imagens",
			"viewer.close": "Fechar",
			"viewer.prev": "Imagem anterior",
			"viewer.next": "Próxima imagem",
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

		document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
			var v = dict[el.getAttribute("data-i18n-alt")];
			if (v !== undefined) el.setAttribute("alt", v);
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
