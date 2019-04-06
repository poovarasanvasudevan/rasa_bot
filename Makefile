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

start-action-server:
	python -m rasa_core_sdk.endpoint --actions actions

start-nlu-server:
	python -m rasa_nlu.server --path ./

start-core-server:
	python -m rasa_core.run --enable_api -d models/dialogue -u models/nlu/current -o out.log --endpoints endpoint.yml

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
	python -m rasa_core.train interactive --core models/dialogue --nlu models/nlu/current --endpoints endpoint.yml

build-model:
	make clean-dir&
	make train-core&
	make train-nlu

fresh-start:
	make clean-dir&
	make train-core&
	make train-nlu&
	make train-online&

engl-clean-dir:
	rmdir /s /q models\engl

engl-train-core:
	python -m rasa_core.train -d data/engl/engl_domain.yml -s data/engl/stories -c policy.yml --debug -o models/engl/dialogue

engl-train-nlu:
	python -m rasa_nlu.train -c config.yml --fixed_model_name engl --data data/engl/nlu_engl.md -o models --project nlu --verbose

engl-train-online:
	python -m rasa_core.train interactive --core models/engl/dialogue --nlu models/nlu/engl --endpoints endpoint.yml


fresh-engl-start:
	make engl-clean-dir&
	make engl-train-core&
	make engl-train-nlu&
	make engl-train-online

engl-cmd-debug:
	python -m rasa_core.run -d models/engl/dialogue -u models/nlu/engl --debug --endpoints endpoint.yml

engl-cmd:
	python -m rasa_core.run -d models/engl/dialogue -u models/nlu/engl --endpoints endpoint.yml


engl-train:
	make engl-clean-dir&
	make engl-train-core&
	make engl-train-nlu&

engl-evaluate:
	python -m rasa_core.evaluate --core models/engl/dialogue --stories data/engl/stories/ -o results

engl-run-cmd:
	make engl-clean-dir&
	make engl-train-core&
	make engl-train-nlu&
	make engl-cmd

start-model-server:
	python -m rasa_nlu.server -c config.yml --path models

start-model-nlu-server:
	python -m rasa_core.run --enable_api -d models/dialogue -u models/nlu/current -o out.log

evaluate-core:
	python -m rasa_core.evaluate --core models/dialogue -s data/core/ --fail_on_prediction_errors
