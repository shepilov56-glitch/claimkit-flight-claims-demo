window.CK = window.CK || {};
Object.assign(window.CK, {
  en: {
    locale:'en-US',
    ui:['Early draft builder · browser demo','Manage a flight disruption','Prepare a letter draft in a few minutes.','Enter your flight details. Claimkit will prepare an editable letter draft and a checklist of useful documents.','What happened?','Start with what you remember. You can add details later.','Flight · 1 of 1','Flight details','Delay or cancellation','What happened next?','Reply contact','Clear form','Prepare draft','Your claim packet','Updates after you complete the form.','On this device','Start with the flight details','We’ll prepare a draft and suggest supporting documents.','Useful documents to gather','Ticket or booking confirmation','Boarding pass, if available','Airline messages about the disruption','Receipts for necessary delay expenses','Letter draft','You can edit this text','Your letter draft will appear here.','Copy text','Download .txt','Demo privacy:','Your information stays in this browser and is not saved or sent to a server. Claimkit helps prepare a letter; it does not determine eligibility for compensation. Rules depend on the route and circumstances, so check with a competent authority or adviser.','Claimkit · early prototype','No letters are sent automatically.','Draft prepared','Review every detail and edit the wording as needed. Nothing has been sent.','Copied','Language','Month','Changing language will regenerate the draft and replace any edits. Continue?'],
    fields:['Airline','Flight number','From','To','Flight date','Booking reference (optional)','Situation','Where did the journey start?','Scheduled arrival','Actual arrival or trip outcome','How late was the arrival?','What do you know about the cause?','Was another flight or route offered?','Airline response to your claim','Expenses caused by the disruption and evidence','If denied boarding: did you give up your seat voluntarily?','Name','Email'],
    ph:['For example, Example Air','For example, EX123','City or airport','City or airport','DD','Enter it yourself in the letter if needed','For example: 21:40, or rerouted and arrived 24 April','For example: over 3 hours; exact time unknown','For example: airline said a technical issue; or leave blank if unknown','For example: hotel €120, meals €25; receipts available?','As shown on the booking','name@example.com'],
    hints:['Year defaults to 2020 — check it. If you do not know the exact day, enter at least the month and year.','If relevant, say how you learned the cause. Leave blank if you do not know.','Enter only costs you actually paid. Do not enter card details.'],
    choices:{problem:['Flight delayed','Flight cancelled','Denied boarding','Other flight problem'],region:['European Union','United Kingdom','Another country','Not sure'],reroute:['Not sure / do not remember','No alternative offered','Another flight with the same airline','Another flight or airline','Refund offered'],response:['Unknown / not stated','I have not contacted the airline yet','Waiting for a reply','Some expenses or requests were covered','Claim was rejected','Payment or reimbursement received'],boarding:['Not relevant to my situation','Not sure','No, I wanted to travel','Yes, I agreed to give up my seat']},
    fb:['[flight date]','[check the flight year]','[enter month and day]','[check the flight date]',' (day unknown)','[airline name]','[flight number]','[departure airport]','[destination airport]','[passenger name]','[reply email]','[scheduled time]','[actual arrival time / cancellation]','[delay duration not stated]','Not stated.','The reason for the disruption was not provided to me.','Not provided.','Not stated'],
    letter:{subject:'Request for compensation and expenses — flight {flight}, {date}',greeting:'Hello,',opening:'I am asking you to review my case after this flight disruption: {issue}.',labels:['Airline:','Flight:','Route:','Date:','Scheduled arrival:','Actual arrival / outcome:','Arrival delay:','Booking reference:','Information about the disruption:','Alternative flight or refund offered:','Expenses and supporting evidence:','Airline response status:','Voluntary seat surrender:'],request:'Please let me know which rights and reimbursement options may apply to my situation, and consider compensation and/or reimbursement of documented expenses where provided by the applicable rules.',denial:'If you decline my request, please state the specific reason and explain how I can appeal.',evidence:'I can provide my booking confirmation, boarding pass, and expense receipts.',name:'Name:',email:'Email:',closing:'Kind regards,',unknownReason:'The reason for the disruption was not provided to me.',noExpenses:'Not provided.',boardingNo:'I did not agree to give up my seat voluntarily.',boardingYes:'I agreed to give up my seat voluntarily.',boardingUnknown:'I am not sure whether my agreement to give up my seat was recorded as voluntary.'}
  },
  es: {
    locale:'es-ES',
    ui:['Generador de borradores · demo web','Gestiona una incidencia de vuelo','Prepara una carta en pocos minutos.','Introduce los datos del vuelo. Claimkit preparará un borrador editable y una lista de documentos útiles.','¿Qué ocurrió?','Empieza con lo que recuerdes. Puedes añadir detalles después.','Vuelo · 1 de 1','Datos del vuelo','Retraso o cancelación','¿Qué ocurrió después?','Datos de contacto','Borrar formulario','Preparar borrador','Tu expediente','Se actualizará al completar el formulario.','En este dispositivo','Empieza con los datos del vuelo','Prepararemos un borrador y sugeriremos documentos útiles.','Documentos útiles','Billete o confirmación de reserva','Tarjeta de embarque, si la conservas','Mensajes de la aerolínea sobre la incidencia','Recibos de gastos necesarios por el retraso','Borrador de carta','Puedes editar este texto','Aquí aparecerá el borrador de la carta.','Copiar texto','Descargar .txt','Privacidad de la demo:','La información permanece en este navegador y no se guarda ni se envía a un servidor. Claimkit ayuda a preparar una carta; no determina si tienes derecho a una compensación. Las normas dependen de la ruta y las circunstancias; consulta a una autoridad o asesor competente.','Claimkit · prototipo inicial','No se envían cartas automáticamente.','Borrador preparado','Revisa todos los datos y modifica el texto si es necesario. No se ha enviado nada.','Copiado','Idioma','Mes','Cambiar el idioma volverá a generar el borrador y sustituirá las modificaciones. ¿Continuar?'],
    fields:['Aerolínea','Número de vuelo','Desde','Hasta','Fecha del vuelo','Referencia de reserva (opcional)','Situación','¿Dónde comenzó el viaje?','Llegada prevista','Llegada real o resultado del viaje','¿Cuánto se retrasó la llegada?','¿Qué sabes de la causa?','¿Te ofrecieron otro vuelo o ruta?','Respuesta de la aerolínea a tu reclamación','Gastos causados por la incidencia y justificantes','Si te denegaron el embarque: ¿cediste tu asiento voluntariamente?','Nombre','Correo electrónico'],
    ph:['Por ejemplo, Example Air','Por ejemplo, EX123','Ciudad o aeropuerto','Ciudad o aeropuerto','DD','Puedes añadirlo después en la carta','Por ejemplo: 21:40, o cambio de ruta y llegada el 24 de abril','Por ejemplo: más de 3 horas; hora exacta desconocida','Por ejemplo: la aerolínea indicó una avería; o déjalo en blanco','Por ejemplo: hotel 120 €, comidas 25 €; ¿hay recibos?','Tal como aparece en la reserva','nombre@ejemplo.com'],
    hints:['El año predeterminado es 2020: revísalo. Si no sabes el día exacto, indica al menos el mes y el año.','Si es importante, indica cómo conociste la causa. Déjalo en blanco si no lo sabes.','Indica solo los gastos que realmente pagaste. No introduzcas datos de tarjeta.'],
    choices:{problem:['Vuelo retrasado','Vuelo cancelado','Denegación de embarque','Otro problema con el vuelo'],region:['Unión Europea','Reino Unido','Otro país','No estoy seguro'],reroute:['No lo sé / no lo recuerdo','No ofrecieron alternativa','Otro vuelo de la misma aerolínea','Otro vuelo o aerolínea','Ofrecieron un reembolso'],response:['Desconocido / no indicado','Aún no he contactado con la aerolínea','Espero una respuesta','Se cubrieron algunos gastos o solicitudes','Reclamación rechazada','Recibí un pago o reembolso'],boarding:['No se aplica a mi caso','No estoy seguro','No, quería viajar','Sí, acepté ceder mi asiento']},
    fb:['[fecha del vuelo]','[comprueba el año del vuelo]','[indica mes y día]','[comprueba la fecha del vuelo]',' (día desconocido)','[nombre de la aerolínea]','[número de vuelo]','[aeropuerto de salida]','[aeropuerto de destino]','[nombre del pasajero]','[correo de respuesta]','[hora prevista]','[hora real de llegada / cancelación]','[duración del retraso no indicada]','No indicado.','No me comunicaron el motivo de la incidencia.','No indicados.','No indicado'],
    letter:{subject:'Solicitud de compensación y gastos — vuelo {flight}, {date}',greeting:'Hola:',opening:'Solicito que revisen mi caso por esta incidencia del vuelo: {issue}.',labels:['Aerolínea:','Vuelo:','Ruta:','Fecha:','Llegada prevista:','Llegada real / resultado:','Retraso en la llegada:','Referencia de reserva:','Información sobre la incidencia:','Vuelo alternativo o reembolso ofrecido:','Gastos y justificantes:','Estado de la respuesta de la aerolínea:','Cesión voluntaria del asiento:'],request:'Indiquen qué derechos y opciones de reembolso podrían aplicarse a mi situación y valoren una compensación o el reembolso de los gastos acreditados cuando lo prevean las normas aplicables.',denial:'Si rechazan mi solicitud, indiquen el motivo concreto y cómo puedo recurrir.',evidence:'Puedo aportar la confirmación de reserva, la tarjeta de embarque y los recibos de gastos.',name:'Nombre:',email:'Correo electrónico:',closing:'Atentamente,',unknownReason:'No me comunicaron el motivo de la incidencia.',noExpenses:'No indicados.',boardingNo:'No acepté ceder mi asiento voluntariamente.',boardingYes:'Acepté ceder mi asiento voluntariamente.',boardingUnknown:'No estoy seguro de si mi consentimiento para ceder el asiento quedó registrado como voluntario.'}
  }
});

Object.assign(window.CK, {
  fr: {
    locale:'fr-FR',
    ui:['Générateur de brouillon · démo web','Gérez une perturbation de vol','Préparez une lettre en quelques minutes.','Saisissez les détails du vol. Claimkit préparera un brouillon modifiable et une liste de documents utiles.','Que s’est-il passé ?','Commencez par ce dont vous vous souvenez. Vous pourrez compléter plus tard.','Vol · 1 sur 1','Détails du vol','Retard ou annulation','Que s’est-il passé ensuite ?','Coordonnées de réponse','Effacer le formulaire','Préparer le brouillon','Votre dossier','Mis à jour après avoir rempli le formulaire.','Sur cet appareil','Commencez par les détails du vol','Nous préparerons un brouillon et suggérerons des justificatifs utiles.','Documents utiles','Billet ou confirmation de réservation','Carte d’embarquement, si disponible','Messages de la compagnie sur la perturbation','Justificatifs des dépenses nécessaires liées au retard','Brouillon de lettre','Texte modifiable','Votre brouillon de lettre apparaîtra ici.','Copier le texte','Télécharger .txt','Confidentialité de la démo :','Vos informations restent dans ce navigateur ; elles ne sont ni enregistrées ni envoyées à un serveur. Claimkit aide à préparer une lettre et ne détermine pas votre droit à une indemnisation. Les règles dépendent de l’itinéraire et des circonstances : vérifiez-les auprès d’une autorité ou d’un conseiller compétent.','Claimkit · prototype précoce','Aucune lettre n’est envoyée automatiquement.','Brouillon préparé','Vérifiez chaque détail et modifiez le texte si nécessaire. Rien n’a été envoyé.','Copié','Langue','Mois','Changer de langue régénérera le brouillon et remplacera vos modifications. Continuer ?'],
    fields:['Compagnie aérienne','Numéro de vol','Départ','Arrivée','Date du vol','Référence de réservation (facultatif)','Situation','Où le voyage a-t-il commencé ?','Arrivée prévue','Arrivée réelle ou résultat du voyage','Durée du retard à l’arrivée','Que savez-vous de la cause ?','Un autre vol ou itinéraire a-t-il été proposé ?','Réponse de la compagnie à votre réclamation','Dépenses liées à la perturbation et justificatifs','En cas de refus d’embarquement : avez-vous cédé votre place volontairement ?','Nom','E-mail'],
    ph:['Par exemple, Example Air','Par exemple, EX123','Ville ou aéroport','Ville ou aéroport','JJ','À ajouter vous-même dans la lettre si nécessaire','Par exemple : 21 h 40, ou réacheminement et arrivée le 24 avril','Par exemple : plus de 3 h ; heure exacte inconnue','Par exemple : la compagnie a signalé un problème technique ; ou laisser vide','Par exemple : hôtel 120 €, repas 25 € ; reçus disponibles ?','Comme indiqué sur la réservation','nom@exemple.com'],
    hints:['L’année par défaut est 2020 : vérifiez-la. Si le jour exact est inconnu, indiquez au moins le mois et l’année.','Si utile, indiquez comment vous avez appris la cause. Laissez vide si vous ne la connaissez pas.','Indiquez uniquement les dépenses réellement payées. Ne saisissez pas de données de carte.'],
    choices:{problem:['Vol retardé','Vol annulé','Refus d’embarquement','Autre problème de vol'],region:['Union européenne','Royaume-Uni','Autre pays','Je ne sais pas'],reroute:['Je ne sais pas / je ne me souviens pas','Aucune alternative proposée','Autre vol de la même compagnie','Autre vol ou compagnie','Remboursement proposé'],response:['Inconnu / non indiqué','Je n’ai pas encore contacté la compagnie','En attente d’une réponse','Une partie des frais ou demandes a été prise en charge','Réclamation refusée','Paiement ou remboursement reçu'],boarding:['Sans objet pour ma situation','Je ne sais pas','Non, je voulais voyager','Oui, j’ai accepté de céder ma place']},
    fb:['[date du vol]','[vérifier l’année du vol]','[indiquer le mois et le jour]','[vérifier la date du vol]',' (jour inconnu)','[nom de la compagnie]','[numéro de vol]','[aéroport de départ]','[aéroport de destination]','[nom du passager]','[e-mail de réponse]','[heure prévue]','[heure réelle d’arrivée / annulation]','[durée du retard non indiquée]','Non indiqué.','La cause de la perturbation ne m’a pas été communiquée.','Non indiquées.','Non indiqué'],
    letter:{subject:'Demande d’indemnisation et de remboursement des frais — vol {flight}, {date}',greeting:'Bonjour,',opening:'Je vous demande d’examiner ma situation à la suite de cette perturbation du vol : {issue}.',labels:['Compagnie aérienne :','Vol :','Itinéraire :','Date :','Arrivée prévue :','Arrivée réelle / résultat :','Retard à l’arrivée :','Référence de réservation :','Informations sur la perturbation :','Vol de remplacement ou remboursement proposé :','Dépenses et justificatifs :','État de la réponse de la compagnie :','Cession volontaire de place :'],request:'Merci de m’indiquer les droits et possibilités de remboursement susceptibles de s’appliquer à ma situation et d’examiner une indemnisation et/ou le remboursement des frais justifiés lorsque les règles applicables le prévoient.',denial:'En cas de refus, merci d’en préciser le motif et la procédure de recours.',evidence:'Je peux fournir la confirmation de réservation, la carte d’embarquement et les justificatifs de dépenses.',name:'Nom :',email:'E-mail :',closing:'Cordialement,',unknownReason:'La cause de la perturbation ne m’a pas été communiquée.',noExpenses:'Non indiquées.',boardingNo:'Je n’ai pas accepté volontairement de céder ma place.',boardingYes:'J’ai accepté volontairement de céder ma place.',boardingUnknown:'Je ne sais pas si mon accord pour céder ma place a été enregistré comme volontaire.'}
  },
  de: {
    locale:'de-DE',
    ui:['Entwurfsgenerator · Browser-Demo','Flugstörung klären','Erstellen Sie in wenigen Minuten einen Briefentwurf.','Geben Sie die Flugdaten ein. Claimkit erstellt einen bearbeitbaren Briefentwurf und eine Liste hilfreicher Unterlagen.','Was ist passiert?','Beginnen Sie mit dem, woran Sie sich erinnern. Details können später ergänzt werden.','Flug · 1 von 1','Flugdaten','Verspätung oder Annullierung','Was geschah danach?','Kontakt für die Antwort','Formular leeren','Entwurf erstellen','Ihre Unterlagen','Wird nach dem Ausfüllen aktualisiert.','Auf diesem Gerät','Beginnen Sie mit den Flugdaten','Wir erstellen einen Entwurf und schlagen hilfreiche Nachweise vor.','Hilfreiche Unterlagen','Ticket oder Buchungsbestätigung','Bordkarte, falls vorhanden','Nachrichten der Fluggesellschaft zur Störung','Belege für notwendige Kosten wegen der Verspätung','Briefentwurf','Dieser Text ist bearbeitbar','Hier erscheint Ihr Briefentwurf.','Text kopieren','.txt herunterladen','Datenschutz der Demo:','Ihre Angaben bleiben in diesem Browser und werden weder gespeichert noch an einen Server gesendet. Claimkit hilft beim Erstellen eines Briefs und entscheidet nicht über einen Entschädigungsanspruch. Die Regeln hängen von Strecke und Umständen ab; wenden Sie sich an eine zuständige Stelle oder Beratung.','Claimkit · früher Prototyp','Es werden keine Briefe automatisch versendet.','Entwurf erstellt','Prüfen Sie alle Angaben und passen Sie den Text bei Bedarf an. Es wurde nichts versendet.','Kopiert','Sprache','Monat','Ein Sprachwechsel erstellt den Entwurf neu und ersetzt manuelle Änderungen. Fortfahren?'],
    fields:['Fluggesellschaft','Flugnummer','Von','Nach','Flugdatum','Buchungsnummer (optional)','Situation','Wo begann die Reise?','Geplante Ankunft','Tatsächliche Ankunft oder Reiseergebnis','Wie lange verspätete sich die Ankunft?','Was wissen Sie über den Grund?','Wurde ein anderer Flug oder eine andere Strecke angeboten?','Antwort der Fluggesellschaft auf Ihre Beschwerde','Kosten durch die Störung und Belege','Bei Nichtbeförderung: Haben Sie freiwillig auf Ihren Platz verzichtet?','Name','E-Mail'],
    ph:['Zum Beispiel: Example Air','Zum Beispiel: EX123','Stadt oder Flughafen','Stadt oder Flughafen','TT','Bei Bedarf selbst im Brief ergänzen','Zum Beispiel: 21:40 Uhr oder Umleitung, Ankunft am 24. April','Zum Beispiel: über 3 Stunden; genaue Zeit unbekannt','Zum Beispiel: laut Airline ein technisches Problem; sonst leer lassen','Zum Beispiel: Hotel 120 €, Essen 25 €; Belege vorhanden?','Wie in der Buchung angegeben','name@beispiel.de'],
    hints:['Das Jahr ist standardmäßig 2020 — bitte prüfen. Wenn der genaue Tag unbekannt ist, reichen Monat und Jahr.','Falls wichtig: Geben Sie an, woher Sie den Grund kennen. Sonst leer lassen.','Geben Sie nur tatsächlich bezahlte Kosten an. Keine Kartendaten eingeben.'],
    choices:{problem:['Flug verspätet','Flug annulliert','Nichtbeförderung','Sonstige Flugstörung'],region:['Europäische Union','Vereinigtes Königreich','Anderes Land','Unsicher'],reroute:['Unbekannt / nicht erinnert','Keine Alternative angeboten','Anderer Flug derselben Airline','Anderer Flug oder andere Airline','Erstattung angeboten'],response:['Unbekannt / nicht angegeben','Airline noch nicht kontaktiert','Warte auf Antwort','Ein Teil der Kosten oder Forderungen wurde erstattet','Beschwerde abgelehnt','Zahlung oder Erstattung erhalten'],boarding:['Trifft nicht auf meine Situation zu','Unsicher','Nein, ich wollte reisen','Ja, ich habe dem Verzicht zugestimmt']},
    fb:['[Flugdatum]','[Flugjahr prüfen]','[Monat und Tag angeben]','[Flugdatum prüfen]',' (Tag unbekannt)','[Name der Fluggesellschaft]','[Flugnummer]','[Abflughafen]','[Zielflughafen]','[Name des Passagiers]','[Antwort-E-Mail]','[geplante Uhrzeit]','[tatsächliche Ankunft / Annullierung]','[Verspätungsdauer nicht angegeben]','Nicht angegeben.','Der Grund der Störung wurde mir nicht mitgeteilt.','Nicht angegeben.','Nicht angegeben'],
    letter:{subject:'Anfrage zu Entschädigung und Kosten — Flug {flight}, {date}',greeting:'Guten Tag,',opening:'Bitte prüfen Sie meinen Fall zu folgender Flugstörung: {issue}.',labels:['Fluggesellschaft:','Flug:','Strecke:','Datum:','Geplante Ankunft:','Tatsächliche Ankunft / Ergebnis:','Verspätung bei Ankunft:','Buchungsnummer:','Angaben zur Störung:','Angebotene Ersatzbeförderung oder Erstattung:','Kosten und Belege:','Antwortstatus der Fluggesellschaft:','Freiwilliger Verzicht auf den Sitzplatz:'],request:'Bitte teilen Sie mir mit, welche Rechte und Erstattungsmöglichkeiten in meinem Fall gelten könnten, und prüfen Sie eine Entschädigung und/oder Erstattung belegter Kosten, soweit dies nach den anwendbaren Regeln vorgesehen ist.',denial:'Falls Sie mein Anliegen ablehnen, nennen Sie bitte den konkreten Grund und den möglichen Beschwerdeweg.',evidence:'Buchungsbestätigung, Bordkarte und Kostenbelege kann ich vorlegen.',name:'Name:',email:'E-Mail:',closing:'Mit freundlichen Grüßen,',unknownReason:'Der Grund der Störung wurde mir nicht mitgeteilt.',noExpenses:'Nicht angegeben.',boardingNo:'Ich habe nicht freiwillig auf meinen Sitzplatz verzichtet.',boardingYes:'Ich habe freiwillig dem Verzicht auf meinen Sitzplatz zugestimmt.',boardingUnknown:'Ich weiß nicht, ob meine Zustimmung zum Verzicht als freiwillig dokumentiert wurde.'}
  }
});

Object.assign(window.CK, {
  pt: {
    locale:'pt-PT',
    ui:['Gerador de rascunhos · demonstração web','Resolva uma perturbação de voo','Prepare uma carta em poucos minutos.','Introduza os dados do voo. O Claimkit prepara um rascunho editável e uma lista de documentos úteis.','O que aconteceu?','Comece pelo que se recorda. Pode acrescentar detalhes mais tarde.','Voo · 1 de 1','Dados do voo','Atraso ou cancelamento','O que aconteceu a seguir?','Contacto para resposta','Limpar formulário','Preparar rascunho','O seu processo','Atualizado depois de preencher o formulário.','Neste dispositivo','Comece pelos dados do voo','Vamos preparar um rascunho e sugerir comprovativos úteis.','Documentos úteis','Bilhete ou confirmação da reserva','Cartão de embarque, se disponível','Mensagens da companhia sobre a perturbação','Recibos de despesas necessárias devido ao atraso','Rascunho da carta','Pode editar este texto','O rascunho da carta aparecerá aqui.','Copiar texto','Descarregar .txt','Privacidade da demonstração:','Os seus dados permanecem neste navegador; não são guardados nem enviados para um servidor. O Claimkit ajuda a preparar uma carta e não determina o direito a compensação. As regras dependem do percurso e das circunstâncias; confirme-as junto de uma autoridade ou profissional competente.','Claimkit · protótipo inicial','Nenhuma carta é enviada automaticamente.','Rascunho preparado','Verifique todos os dados e edite o texto, se necessário. Nada foi enviado.','Copiado','Idioma','Mês','A alteração do idioma irá gerar novamente o rascunho e substituir as edições. Continuar?'],
    fields:['Companhia aérea','Número do voo','Origem','Destino','Data do voo','Referência da reserva (opcional)','Situação','Onde começou a viagem?','Chegada prevista','Chegada real ou resultado da viagem','Quanto se atrasou a chegada?','O que sabe sobre a causa?','Foi oferecido outro voo ou percurso?','Resposta da companhia à reclamação','Despesas causadas pela perturbação e comprovativos','Se lhe foi recusado o embarque: cedeu o lugar voluntariamente?','Nome','E-mail'],
    ph:['Por exemplo, Example Air','Por exemplo, EX123','Cidade ou aeroporto','Cidade ou aeroporto','DD','Pode acrescentar depois na carta','Por exemplo: 21:40 ou reencaminhamento, chegada a 24 de abril','Por exemplo: mais de 3 horas; hora exata desconhecida','Por exemplo: a companhia indicou uma avaria; ou deixe em branco','Por exemplo: hotel 120 €, refeições 25 €; tem recibos?','Conforme indicado na reserva','nome@exemplo.com'],
    hints:['O ano predefinido é 2020: confirme-o. Se não souber o dia exato, indique pelo menos o mês e o ano.','Se for relevante, indique como soube a causa. Deixe em branco se não souber.','Indique apenas despesas que pagou realmente. Não introduza dados do cartão.'],
    choices:{problem:['Voo atrasado','Voo cancelado','Recusa de embarque','Outro problema com o voo'],region:['União Europeia','Reino Unido','Outro país','Não sei'],reroute:['Não sei / não me recordo','Não foi oferecida alternativa','Outro voo da mesma companhia','Outro voo ou companhia','Foi oferecido reembolso'],response:['Desconhecido / não indicado','Ainda não contactei a companhia','Aguardo resposta','Algumas despesas ou pedidos foram satisfeitos','Reclamação recusada','Recebi pagamento ou reembolso'],boarding:['Não se aplica à minha situação','Não tenho a certeza','Não, queria viajar','Sim, aceitei ceder o lugar']},
    fb:['[data do voo]','[confirme o ano do voo]','[indique o mês e o dia]','[confirme a data do voo]',' (dia desconhecido)','[nome da companhia aérea]','[número do voo]','[aeroporto de partida]','[aeroporto de destino]','[nome do passageiro]','[e-mail para resposta]','[hora prevista]','[hora real de chegada / cancelamento]','[duração do atraso não indicada]','Não indicado.','A causa da perturbação não me foi comunicada.','Não indicadas.','Não indicado'],
    letter:{subject:'Pedido de compensação e despesas — voo {flight}, {date}',greeting:'Exmos. Senhores,',opening:'Solicito a análise do meu caso relativo a esta perturbação do voo: {issue}.',labels:['Companhia aérea:','Voo:','Percurso:','Data:','Chegada prevista:','Chegada real / resultado:','Atraso à chegada:','Referência da reserva:','Informações sobre a perturbação:','Alternativa de voo ou reembolso oferecido:','Despesas e comprovativos:','Estado da resposta da companhia:','Cedência voluntária do lugar:'],request:'Solicito informação sobre os direitos e opções de reembolso que poderão aplicar-se à minha situação e a análise de uma compensação e/ou do reembolso de despesas comprovadas, quando previsto pelas regras aplicáveis.',denial:'Caso o pedido seja recusado, agradeço que indiquem o motivo concreto e o meio de recurso.',evidence:'Posso apresentar a confirmação da reserva, o cartão de embarque e os recibos das despesas.',name:'Nome:',email:'E-mail:',closing:'Com os melhores cumprimentos,',unknownReason:'A causa da perturbação não me foi comunicada.',noExpenses:'Não indicadas.',boardingNo:'Não aceitei ceder o meu lugar voluntariamente.',boardingYes:'Aceitei ceder o meu lugar voluntariamente.',boardingUnknown:'Não sei se o meu consentimento para ceder o lugar foi registado como voluntário.'}
  },
  ru: {
    locale:'ru-RU',
    ui:['Черновик обращения · демо-версия','Разберитесь со сбоем рейса','Подготовьте черновик письма за пару минут.','Введите данные перелёта. Claimkit подготовит редактируемый черновик письма и список полезных документов.','Что произошло?','Начните с того, что помните. Подробности можно добавить позже.','Перелёт · 1 из 1','Данные рейса','Задержка или отмена','Что было дальше?','Контакт для ответа','Очистить форму','Подготовить черновик','Ваш пакет обращения','Обновится после заполнения формы.','На этом устройстве','Начните с данных рейса','Мы подготовим черновик и подскажем, какие документы могут пригодиться.','Полезно подготовить','Билет или подтверждение бронирования','Посадочный талон, если сохранился','Сообщения авиакомпании о сбое','Чеки за необходимые расходы из-за задержки','Черновик письма','Можно отредактировать','Здесь появится текст обращения.','Скопировать текст','Скачать .txt','Приватность демо:','Данные остаются в этом браузере, не сохраняются и не отправляются на сервер. Claimkit помогает подготовить письмо, но не определяет право на компенсацию. Правила зависят от маршрута и обстоятельств — уточните их у компетентного органа или специалиста.','Claimkit · ранний прототип','Письма не отправляются автоматически.','Черновик подготовлен','Проверьте каждую деталь и при необходимости измените текст. Ничего не отправлено.','Скопировано','Язык','Месяц','При смене языка черновик будет создан заново, а ваши правки заменены. Продолжить?'],
    fields:['Авиакомпания','Номер рейса','Откуда','Куда','Дата рейса','Код бронирования (необязательно)','Ситуация','Где начался рейс?','Плановое прибытие','Фактическое прибытие или итог поездки','На сколько задержалось прибытие?','Что известно о причине сбоя?','Предлагали другой рейс или маршрут?','Ответ авиакомпании на обращение','Расходы из-за сбоя и подтверждения','Если не пустили на борт: уступали место добровольно?','Имя','Электронная почта'],
    ph:['Например, Example Air','Например, EX123','Город или аэропорт','Город или аэропорт','ДД','При необходимости добавьте в письмо самостоятельно','Например: 21:40 или перенаправили, прибыл(а) 24 апреля','Например: более 3 часов, точное время неизвестно','Например: авиакомпания сообщила о неисправности; или оставьте пустым','Например: гостиница €120, еда €25; чеки есть?','Как указано в бронировании','name@example.com'],
    hints:['По умолчанию указан 2020 год — проверьте его. Если точный день неизвестен, укажите хотя бы месяц и год.','Если важно, укажите, откуда вам известна причина. Если не знаете — оставьте поле пустым.','Укажите только фактически понесённые расходы. Не вводите данные банковской карты.'],
    choices:{problem:['Рейс задержали','Рейс отменили','Отказали в посадке','Другая проблема с рейсом'],region:['Европейский союз','Великобритания','Другая страна','Не знаю'],reroute:['Не знаю / не помню','Альтернативу не предлагали','Предложили другой рейс тем же перевозчиком','Предложили другой рейс или перевозчика','Предложили возврат денег'],response:['Неизвестно / не указано','Ещё не обращался(ась) в авиакомпанию','Ожидаю ответ','Часть расходов или требований возместили','В обращении отказали','Получил(а) выплату или возмещение'],boarding:['Не относится к моей ситуации','Не уверен(а)','Нет, я хотел(а) лететь','Да, согласился(ась) уступить место']},
    fb:['[дата рейса]','[проверьте год рейса]','[укажите месяц и день]','[проверьте дату рейса]',' (день неизвестен)','[название авиакомпании]','[номер рейса]','[аэропорт отправления]','[аэропорт назначения]','[имя пассажира]','[email для ответа]','[плановое время]','[фактическое прибытие / отмена]','[продолжительность задержки не указана]','Не указано.','Причину нарушения расписания мне не сообщили.','Не указаны.','Не указано'],
    letter:{subject:'Запрос о компенсации и расходах — рейс {flight}, {date}',greeting:'Здравствуйте!',opening:'Прошу рассмотреть моё обращение по поводу ситуации с рейсом: {issue}.',labels:['Авиакомпания:','Рейс:','Маршрут:','Дата:','Плановое прибытие:','Фактическое прибытие / статус:','Опоздание при прибытии:','Код бронирования:','Сведения о причине сбоя:','Предложенное перенаправление или возврат:','Расходы и подтверждения:','Статус ответа перевозчика:','Добровольный отказ от места:'],request:'Прошу сообщить, какие права и варианты возмещения применимы к моей ситуации, и рассмотреть выплату компенсации и/или возмещение подтверждённых расходов, если это предусмотрено применимыми правилами.',denial:'Если в выплате будет отказано, прошу указать конкретную причину и порядок дальнейшего обжалования.',evidence:'Готов(а) предоставить подтверждение бронирования, посадочный талон и чеки расходов.',name:'Имя:',email:'Электронная почта:',closing:'С уважением,',unknownReason:'Причину нарушения расписания мне не сообщили.',noExpenses:'Не указаны.',boardingNo:'Я не соглашался(ась) добровольно уступить место.',boardingYes:'Я согласился(ась) добровольно уступить место.',boardingUnknown:'Не уверен(а), было ли оформлено моё добровольное согласие уступить место.'}
  }
});

Object.assign(window.CK, {
  zh: {
    locale:'zh-CN',
    ui:['草稿生成器 · 网页演示','处理航班中断问题','几分钟内准备好信函草稿。','输入航班信息。Claimkit 会生成可编辑的信函草稿和有用材料清单。','发生了什么？','先填写您记得的信息，之后可以补充。','航班 · 1/1','航班信息','延误或取消','之后发生了什么？','回复联系方式','清空表单','生成草稿','您的材料包','填写表单后更新。','仅在此设备','先填写航班信息','我们会准备草稿并提示可能需要的证明材料。','建议准备的材料','机票或预订确认','登机牌（如有）','航空公司关于航班中断的消息','延误造成的必要支出收据','信函草稿','可编辑文本','信函草稿将显示在这里。','复制文本','下载 .txt','演示版隐私：','信息仅保留在此浏览器中，不会保存或发送到服务器。Claimkit 帮助准备信函，但不会判断您是否有权获得赔偿。规则取决于航线和具体情况，请向主管机构或专业人士核实。','Claimkit · 早期原型','不会自动发送任何信函。','草稿已生成','请检查所有信息并根据需要修改。尚未发送任何内容。','已复制','语言','月份','切换语言将重新生成草稿并覆盖手动修改。继续吗？'],
    fields:['航空公司','航班号','出发地','目的地','航班日期','预订编号（可选）','情况','旅程从哪里开始？','计划到达时间','实际到达时间或行程结果','到达延误了多久？','您知道延误原因吗？','是否提供了其他航班或路线？','航空公司对您申诉的回复','航班中断造成的费用及凭证','如果被拒绝登机：您是否自愿放弃座位？','姓名','电子邮箱'],
    ph:['例如：Example Air','例如：EX123','城市或机场','城市或机场','日','如有需要，可自行添加到信函中','例如：21:40，或改道并于4月24日到达','例如：超过3小时；具体时间未知','例如：航空公司称出现技术故障；未知则留空','例如：酒店€120、餐费€25；是否有收据？','与预订信息一致','name@example.com'],
    hints:['默认年份为2020，请核对。如果不知道具体日期，至少填写月份和年份。','如有必要，请说明您如何得知原因。不知道则留空。','只填写实际发生的费用。请勿输入银行卡信息。'],
    choices:{problem:['航班延误','航班取消','拒绝登机','其他航班问题'],region:['欧盟','英国','其他国家','不确定'],reroute:['不知道 / 不记得','未提供替代方案','提供同一家航空公司的其他航班','提供其他航班或航空公司','提供退款'],response:['未知 / 未说明','尚未联系航空公司','等待回复','部分费用或请求已获处理','申诉被拒绝','已收到付款或退款'],boarding:['不适用于我的情况','不确定','没有，我想继续旅行','是，我同意放弃座位']},
    fb:['[航班日期]','[请核对航班年份]','[请填写月份和日期]','[请核对航班日期]','（日期不详）','[航空公司名称]','[航班号]','[出发机场]','[到达机场]','[乘客姓名]','[回复邮箱]','[计划时间]','[实际到达时间 / 取消情况]','[未说明延误时长]','未说明。','航空公司没有告知我航班中断的原因。','未提供。','未说明'],
    letter:{subject:'关于航班赔偿及费用的申请 — 航班 {flight}，{date}',greeting:'您好：',opening:'请审核我因以下航班问题提出的申请：{issue}。',labels:['航空公司：','航班：','路线：','日期：','计划到达：','实际到达 / 行程结果：','到达延误：','预订编号：','航班中断原因信息：','提供的改签或退款方案：','费用及凭证：','航空公司回复状态：','是否自愿放弃座位：'],request:'请告知我的情况可能适用哪些权利和退款方案，并在适用规则允许的情况下，审核赔偿和/或有凭证费用的报销申请。',denial:'如拒绝我的申请，请说明具体原因以及后续申诉方式。',evidence:'我可以提供预订确认、登机牌和费用收据。',name:'姓名：',email:'电子邮箱：',closing:'此致',unknownReason:'航空公司没有告知我航班中断的原因。',noExpenses:'未提供。',boardingNo:'我没有自愿放弃座位。',boardingYes:'我自愿同意放弃座位。',boardingUnknown:'我不确定放弃座位是否被记录为自愿行为。'}
  },
  hi: {
    locale:'hi-IN',
    ui:['ड्राफ़्ट जनरेटर · वेब डेमो','उड़ान में आई समस्या संभालें','कुछ मिनटों में पत्र का मसौदा तैयार करें।','उड़ान की जानकारी भरें। Claimkit संपादन योग्य पत्र का मसौदा और उपयोगी दस्तावेज़ों की सूची बनाएगा।','क्या हुआ?','जो याद है उससे शुरू करें। विवरण बाद में जोड़ सकते हैं।','उड़ान · 1 में से 1','उड़ान का विवरण','देरी या रद्द होना','इसके बाद क्या हुआ?','जवाब के लिए संपर्क','फ़ॉर्म साफ़ करें','मसौदा तैयार करें','आपका दावा पैकेट','फ़ॉर्म भरने के बाद अपडेट होगा।','इस डिवाइस पर','उड़ान के विवरण से शुरू करें','हम मसौदा तैयार करेंगे और उपयोगी प्रमाण सुझाएँगे।','तैयार रखने योग्य दस्तावेज़','टिकट या बुकिंग की पुष्टि','बोर्डिंग पास, यदि उपलब्ध हो','समस्या के बारे में एयरलाइन के संदेश','देरी के कारण हुए आवश्यक खर्चों की रसीदें','पत्र का मसौदा','इस पाठ को संपादित किया जा सकता है','पत्र का मसौदा यहाँ दिखाई देगा।','पाठ कॉपी करें','.txt डाउनलोड करें','डेमो की गोपनीयता:','आपकी जानकारी इसी ब्राउज़र में रहती है; इसे सेव या सर्वर पर भेजा नहीं जाता। Claimkit पत्र तैयार करने में मदद करता है, लेकिन मुआवज़े की पात्रता तय नहीं करता। नियम मार्ग और परिस्थितियों पर निर्भर करते हैं; किसी सक्षम प्राधिकरण या सलाहकार से जाँचें।','Claimkit · शुरुआती प्रोटोटाइप','कोई पत्र अपने-आप नहीं भेजा जाता।','मसौदा तैयार है','सभी विवरण जाँचें और ज़रूरत के अनुसार बदलें। कुछ भी भेजा नहीं गया है।','कॉपी हो गया','भाषा','महीना','भाषा बदलने पर मसौदा फिर बनेगा और आपके बदलाव हट जाएँगे। जारी रखें?'],
    fields:['एयरलाइन','उड़ान संख्या','कहाँ से','कहाँ तक','उड़ान की तारीख','बुकिंग संदर्भ (वैकल्पिक)','स्थिति','यात्रा कहाँ से शुरू हुई?','निर्धारित आगमन','वास्तविक आगमन या यात्रा का नतीजा','आगमन में कितनी देरी हुई?','कारण के बारे में क्या पता है?','क्या दूसरी उड़ान या मार्ग दिया गया?','शिकायत पर एयरलाइन का जवाब','समस्या के कारण हुए खर्च और प्रमाण','बोर्डिंग से रोके जाने पर: क्या आपने स्वेच्छा से सीट छोड़ी?','नाम','ईमेल'],
    ph:['उदाहरण: Example Air','उदाहरण: EX123','शहर या हवाई अड्डा','शहर या हवाई अड्डा','दिन','ज़रूरत हो तो पत्र में स्वयं जोड़ें','उदाहरण: 21:40, या मार्ग बदलकर 24 अप्रैल को पहुँचे','उदाहरण: 3 घंटे से अधिक; सही समय अज्ञात','उदाहरण: एयरलाइन ने तकनीकी समस्या बताई; अज्ञात हो तो खाली छोड़ें','उदाहरण: होटल €120, खाना €25; रसीदें हैं?','बुकिंग में जैसा लिखा है','name@example.com'],
    hints:['डिफ़ॉल्ट वर्ष 2020 है — इसे जाँचें। सही दिन न पता हो तो कम-से-कम महीना और वर्ष दें।','यदि ज़रूरी हो, बताएँ कि कारण का पता कैसे चला। न पता हो तो खाली छोड़ें।','केवल वास्तव में किए गए खर्च लिखें। बैंक कार्ड की जानकारी न दें।'],
    choices:{problem:['उड़ान में देरी हुई','उड़ान रद्द हुई','बोर्डिंग से मना किया गया','उड़ान की अन्य समस्या'],region:['यूरोपीय संघ','यूनाइटेड किंगडम','दूसरा देश','पता नहीं'],reroute:['पता नहीं / याद नहीं','विकल्प नहीं दिया गया','उसी एयरलाइन की दूसरी उड़ान','दूसरी उड़ान या एयरलाइन','रिफ़ंड की पेशकश'],response:['अज्ञात / बताया नहीं गया','अभी एयरलाइन से संपर्क नहीं किया','जवाब का इंतज़ार','कुछ खर्च या माँगें पूरी हुईं','शिकायत अस्वीकार हुई','भुगतान या रिफ़ंड मिला'],boarding:['मेरी स्थिति पर लागू नहीं','निश्चित नहीं','नहीं, मैं यात्रा करना चाहता/चाहती था/थी','हाँ, मैंने सीट छोड़ने की सहमति दी']},
    fb:['[उड़ान की तारीख]','[उड़ान का वर्ष जाँचें]','[महीना और दिन दें]','[उड़ान की तारीख जाँचें]',' (दिन अज्ञात)','[एयरलाइन का नाम]','[उड़ान संख्या]','[प्रस्थान हवाई अड्डा]','[गंतव्य हवाई अड्डा]','[यात्री का नाम]','[जवाब के लिए ईमेल]','[निर्धारित समय]','[वास्तविक आगमन / रद्द होना]','[देरी की अवधि नहीं बताई]','नहीं बताया गया।','मुझे समस्या का कारण नहीं बताया गया।','नहीं दिए गए।','नहीं बताया गया'],
    letter:{subject:'मुआवज़े और खर्चों के लिए अनुरोध — उड़ान {flight}, {date}',greeting:'नमस्कार,',opening:'कृपया उड़ान की इस समस्या के संबंध में मेरे मामले की समीक्षा करें: {issue}।',labels:['एयरलाइन:','उड़ान:','मार्ग:','तारीख:','निर्धारित आगमन:','वास्तविक आगमन / नतीजा:','आगमन में देरी:','बुकिंग संदर्भ:','समस्या के बारे में जानकारी:','दिया गया वैकल्पिक मार्ग या रिफ़ंड:','खर्च और प्रमाण:','एयरलाइन के जवाब की स्थिति:','स्वेच्छा से सीट छोड़ना:'],request:'कृपया बताएँ कि मेरी स्थिति में कौन-से अधिकार और रिफ़ंड विकल्प लागू हो सकते हैं, और जहाँ लागू नियमों में प्रावधान हो वहाँ मुआवज़े और/या प्रमाणित खर्चों की भरपाई पर विचार करें।',denial:'यदि अनुरोध अस्वीकार किया जाता है, तो कृपया स्पष्ट कारण और अपील का तरीका बताएँ।',evidence:'मैं बुकिंग की पुष्टि, बोर्डिंग पास और खर्चों की रसीदें दे सकता/सकती हूँ।',name:'नाम:',email:'ईमेल:',closing:'सादर,',unknownReason:'मुझे समस्या का कारण नहीं बताया गया।',noExpenses:'नहीं दिए गए।',boardingNo:'मैंने स्वेच्छा से अपनी सीट छोड़ने की सहमति नहीं दी।',boardingYes:'मैंने स्वेच्छा से अपनी सीट छोड़ने की सहमति दी।',boardingUnknown:'मुझे नहीं पता कि सीट छोड़ने की मेरी सहमति स्वैच्छिक दर्ज की गई थी या नहीं।'}
  }
});

(function () {
  const formBefore = document.getElementById('claimForm');
  const form = formBefore.cloneNode(true);
  formBefore.replaceWith(form);
  ['copyBtn','downloadBtn'].forEach(id => {
    const oldButton = document.getElementById(id);
    oldButton.replaceWith(oldButton.cloneNode(true));
  });
  const draft = document.getElementById('draft');
  const languageSelect = document.getElementById('languageSelect');
  const get = id => document.getElementById(id).value.trim();
  let currentLang = 'en';
  const data = window.CK;

  function optionTexts(id, values) {
    const options = document.getElementById(id).options;
    values.forEach((value, index) => { if (options[index]) options[index].textContent = value; });
  }
  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }
  function applyLanguage(lang, initial) {
    const t = data[lang] || data.en;
    if (!initial && draft.value.trim() && draft.dataset.generated === 'true' && !window.confirm(t.ui[37])) {
      languageSelect.value = currentLang;
      return;
    }
    currentLang = lang;
    languageSelect.value = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.documentElement.dir = 'ltr';
    draft.dir = 'ltr';
    setText('#topnote', t.ui[0]);
    setText('.hero .eyebrow', t.ui[1]);
    setText('.hero h1', t.ui[2]);
    setText('.hero p', t.ui[3]);
    setText('.formcard .cardhead h2', t.ui[4]);
    setText('.formcard .cardhead .sub', t.ui[5]);
    setText('.formcard .cardhead .pill', t.ui[6]);
    document.querySelectorAll('.formcard .sectiontitle').forEach((el, i) => { if (t.ui[7+i]) el.textContent = t.ui[7+i]; });
    const fieldIds = ['airline','flight','from','to','dateDay','booking','problem','regime','planned','actual','delayDuration','reason','reroute','airlineResponse','expenses','boardingConsent','name','email'];
    fieldIds.forEach((id, i) => {
      const label = document.querySelector('label[for="'+id+'"]');
      if (label) label.textContent = t.fields[i];
    });
    ['airline','flight','from','to','dateDay','booking','actual','delayDuration','reason','expenses','name','email'].forEach((id, i) => {
      document.getElementById(id).placeholder = t.ph[i];
    });
    document.getElementById('dateDay').setAttribute('aria-label', t.fields[4]+' — '+t.ph[4]);
    document.getElementById('dateMonth').setAttribute('aria-label', t.ui[36]+' — '+t.fields[4]);
    document.getElementById('dateYear').setAttribute('aria-label', t.fields[4]);
    const monthSelect = document.getElementById('dateMonth');
    monthSelect.options[0].textContent = t.ui[36];
    for (let month=1; month<=12; month++) {
      monthSelect.options[month].textContent = new Intl.DateTimeFormat(t.locale,{month:'long',timeZone:'UTC'}).format(new Date(Date.UTC(2020,month-1,1)));
    }
    document.querySelectorAll('.formcard .hint').forEach((el, i) => { if (t.hints[i]) el.textContent = t.hints[i]; });
    optionTexts('problem', t.choices.problem);
    optionTexts('regime', t.choices.region);
    optionTexts('reroute', t.choices.reroute);
    optionTexts('airlineResponse', t.choices.response);
    optionTexts('boardingConsent', t.choices.boarding);
    form.querySelector('button[type="reset"]').textContent = t.ui[11];
    form.querySelector('button[type="submit"]').innerHTML = t.ui[12]+' <span aria-hidden="true">→</span>';
    setText('.result .cardhead h2', t.ui[13]);
    setText('.result .cardhead .sub', t.ui[14]);
    setText('.result .cardhead .pill', t.ui[15]);
    setText('#resultTitle', draft.value ? t.ui[32] : t.ui[16]);
    setText('#resultText', draft.value ? t.ui[33] : t.ui[17]);
    setText('.result > .sectiontitle', t.ui[18]);
    document.querySelectorAll('.checklist li span:last-child').forEach((el, i) => { if (t.ui[19+i]) el.textContent = t.ui[19+i]; });
    setText('.draftlabel span', t.ui[23]);
    setText('.draftlabel small', t.ui[24]);
    draft.placeholder = t.ui[25];
    draft.setAttribute('aria-label', t.ui[23]);
    document.getElementById('copyBtn').textContent = t.ui[26];
    document.getElementById('downloadBtn').textContent = t.ui[27];
    document.querySelector('.privacy').innerHTML = '<b>'+t.ui[28]+'</b> '+t.ui[29];
    const foot = document.querySelectorAll('.foot span');
    foot[0].textContent = t.ui[30];
    foot[1].textContent = t.ui[31];
    document.getElementById('languageLabel').textContent = t.ui[35];
    languageSelect.setAttribute('aria-label', t.ui[35]);
    if (draft.value && draft.dataset.generated === 'true') generateDraft(false);
  }
  function formatDate(t) {
    const day = Number(get('dateDay'));
    const month = Number(get('dateMonth'));
    const year = Number(get('dateYear'));
    if (!year) return t.fb[0];
    if (year < 1900 || year > 2100) return t.fb[1];
    if (!month && !day) return t.fb[0];
    if (month && !day) {
      const monthYear = new Intl.DateTimeFormat(t.locale,{month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(year,month-1,1)));
      return monthYear+t.fb[4];
    }
    if (!month || !day) return t.fb[2];
    const date = new Date(Date.UTC(year,month-1,day));
    if (date.getUTCFullYear()!==year || date.getUTCMonth()!==month-1 || date.getUTCDate()!==day) return t.fb[3];
    return new Intl.DateTimeFormat(t.locale,{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(date);
  }
  function generateDraft(scrollToResult) {
    const t = data[currentLang] || data.en;
    const l = t.letter;
    const problem = get('problem');
    const problemIndex = ['delay','cancel','denied','other'].indexOf(problem);
    const issue = t.choices.problem[problemIndex<0 ? 3 : problemIndex];
    const flight = get('flight') || t.fb[6];
    const date = formatDate(t);
    const consent = get('boardingConsent');
    const boarding = consent==='no' ? l.boardingNo : consent==='yes' ? l.boardingYes : consent==='unknown' ? l.boardingUnknown : '';
    const rerouteIndex = ['unknown','none','same','other','refund'].indexOf(get('reroute'));
    const responseIndex = ['unknown','not_sent','pending','partial','denied','paid'].indexOf(get('airlineResponse'));
    const lines = [
      l.subject.replace('{flight}',flight).replace('{date}',date),'',l.greeting,'',
      l.opening.replace('{issue}',issue),'',
      l.labels[0]+' '+(get('airline')||t.fb[5]),
      l.labels[1]+' '+flight,
      l.labels[2]+' '+(get('from')||t.fb[7])+' — '+(get('to')||t.fb[8]),
      l.labels[3]+' '+date,
      l.labels[4]+' '+(get('planned')||t.fb[11]),
      l.labels[5]+' '+(get('actual')||t.fb[12])
    ];
    if (problem==='delay') lines.push(l.labels[6]+' '+(get('delayDuration')||t.fb[13]));
    if (get('booking')) lines.push(l.labels[7]+' '+get('booking'));
    lines.push('',l.labels[8]+' '+(get('reason')||l.unknownReason),
      l.labels[9]+' '+(t.choices.reroute[rerouteIndex]||t.fb[17]),
      l.labels[10]+' '+(get('expenses')||l.noExpenses),
      l.labels[11]+' '+(t.choices.response[responseIndex]||t.fb[17]));
    if (boarding) lines.push(l.labels[12]+' '+boarding);
    lines.push('',l.request,l.denial,'',l.evidence,'',
      l.name+' '+(get('name')||t.fb[9]),l.email+' '+(get('email')||t.fb[10]),'',l.closing,get('name')||t.fb[9]);
    draft.value = lines.join('\n');
    draft.dataset.generated = 'true';
    setText('#resultTitle', t.ui[32]);
    setText('#resultText', t.ui[33]);
    document.getElementById('copyBtn').textContent = t.ui[26];
    if (scrollToResult) document.querySelector('.result').scrollIntoView({behavior:'smooth',block:'start'});
  }
  form.addEventListener('submit', event => { event.preventDefault(); generateDraft(true); });
  form.addEventListener('reset', () => setTimeout(() => {
    draft.value = '';
    delete draft.dataset.generated;
    const t = data[currentLang] || data.en;
    setText('#resultTitle',t.ui[16]);
    setText('#resultText',t.ui[17]);
    document.getElementById('copyBtn').textContent=t.ui[26];
  },0));
  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value,false));
  document.getElementById('copyBtn').addEventListener('click', async () => {
    if (!draft.value) return;
    const t = data[currentLang] || data.en;
    try { await navigator.clipboard.writeText(draft.value); document.getElementById('copyBtn').textContent=t.ui[34]; }
    catch { draft.select(); document.execCommand('copy'); document.getElementById('copyBtn').textContent=t.ui[34]; }
  });
  document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!draft.value) return;
    const blob = new Blob([draft.value],{type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href=url; link.download='claimkit-flight-claim-'+currentLang+'.txt'; link.style.display='none';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url),1000);
  });
  applyLanguage('en',true);
})();
