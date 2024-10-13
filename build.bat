@ECHO OFF
ECHO Building Static site
ECHO Installing package...
CMD /C "pnpm install --frozen-lockfile"
ECHO Building...
CMD /C "pnpm generate"
ECHO Done!
SET SHOW_DIRECTORY=y
SET /P SHOW_DIRECTORY=Do you want to view the directory?(Y/n)
:COND
IF %SHOW_DIRECTORY%==y GOTO SHOW_DIR
IF %SHOW_DIRECTORY%==Y GOTO SHOW_DIR
IF %SHOW_DIRECTORY%==n GOTO END_FILE
IF %SHOW_DIRECTORY%==N GOTO END_FILE
SET /P SHOW_DIRECTORY=?redo from start
GOTO COND
REM
:SHOW_DIR
START .output\public
:END_FILE
