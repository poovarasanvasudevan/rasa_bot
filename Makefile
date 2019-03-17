.PHONY: clean test lint

TEST_PATH=./

help:
	@echo "    train-nlu"
	@echo "        Train the natural language understanding using Rasa NLU."
	@echo "    train-core"
	@echo "        Train a dialogue model using Rasa core."
	@echo "    run-cmdline"
	@echo "        Starts the bot on the command line"
	@echo "    visualize"
	@echo "        Saves the story graphs into a file"

clean-dir:
	rmdir /s /q models

start-server:
	python -m rasa_core_sdk.endpoint --actions actions

run-actions:
	python -m rasa_core_sdk.endpoint --actions demo.actions

train-nlu:
	python -m rasa_nlu.train -c config.yml --fixed_model_name current --data data/nlu/nlu_data.md -o models --project nlu --verbose

train-core:
	python -m rasa_core.train -d domain.yml -s data/stories.md -c policy.yml --debug -o models/dialogue

run-cmdline:
	make run-actions&
	python -m rasa_core.run -d models/dialogue -u models/nlu/current --debug --endpoints endpoints.yml

visualize:
	python -m rasa_core.visualize -s data/core/ -d domain.yml -o story_graph.png

train-online:
	python -m rasa_core.train interactive --core models/dialogue --nlu models/nlu/current --endpoints endpoint.yml$

fresh-start:
	make clean-dir&
	make train-core&
	make train-nlu&
	make train-online&


evaluate-core:
	python -m rasa_core.evaluate --core models/dialogue -s data/core/ --fail_on_prediction_errors
