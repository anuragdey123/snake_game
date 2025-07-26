{{/* Generate a name for resources */}}
{{- define "snake-game.name" -}}
snake-game
{{- end -}}

{{- define "snake-game.fullname" -}}
{{ include "snake-game.name" . }}
{{- end -}}
