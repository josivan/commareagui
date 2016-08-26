package br.com.scopus.commarea.tools.gui;

import java.util.Map;

import org.json.simple.JSONObject;

public interface HasJsonData {
    Map<String, String> getRawData();
    JSONObject getJsonObject();
}
